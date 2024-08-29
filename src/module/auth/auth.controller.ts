import {
  Controller,
  Post,
  Res,
  Body,
  Req,
  HttpStatus,
  UseGuards,
  UsePipes,
  HttpException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RegisterAuthDto, RegisterAuthSchema } from './dto/register-auth.dto';
import { ZodValidationPipe } from '../../common/pipes/zod-validation.pipe';

@Controller('/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request, @Res() res: Response): Promise<Response> {
    return res.status(HttpStatus.OK).json({
      message: 'Login successfully',
      data: req.user,
    });
  }

  @UsePipes(new ZodValidationPipe(RegisterAuthSchema))
  @Post('register')
  async register(
    @Req() req: Request,
    @Body() registerAuthDto: RegisterAuthDto,
    @Res() res: Response,
  ): Promise<Response> {
    const result = await this.authService.register(registerAuthDto);

    if (!result)
      throw new HttpException(
        'Username already exists',
        HttpStatus.BAD_REQUEST,
      );

    return res.status(HttpStatus.CREATED).json({
      message: 'Register successfully',
      data: result,
    });
  }
}
