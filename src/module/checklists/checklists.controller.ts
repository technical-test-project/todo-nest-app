import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Res,
  HttpStatus,
  ParseIntPipe,
  NotFoundException,
  Req,
} from '@nestjs/common';
import { ChecklistsService } from './checklists.service';
import { CreateChecklistDto } from './dto/create-checklist.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Response, Request } from 'express';
import { User } from "../auth/entities/user.entity";

@Controller('checklist')
export class ChecklistsController {
  constructor(private readonly checklistsService: ChecklistsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Req() req: Request,
    @Body() createChecklistDto: CreateChecklistDto,
    @Res() res: Response,
  ): Promise<Response> {
    const { id } = req.user as User;

    const result = await this.checklistsService.create(
      id,
      createChecklistDto,
    );
    return res.status(HttpStatus.CREATED).json({
      message: 'Checklist created successfully',
      data: result,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Res() res: Response): Promise<Response> {
    const result = await this.checklistsService.findAll();
    return res.status(HttpStatus.OK).json({
      message: 'All checklists',
      data: result,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    const result = await this.checklistsService.remove(id);

    if (!result) throw new NotFoundException('checklist not found');

    return res.status(HttpStatus.OK).json({
      message: 'Checklist successfully deleted',
    });
  }
}
