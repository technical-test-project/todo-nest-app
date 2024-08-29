import { Injectable } from '@nestjs/common';
import { CreateChecklistDto } from './dto/create-checklist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Checklist } from './entities/checklist.entity';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { User } from "../auth/entities/user.entity";

@Injectable()
export class ChecklistsService {
  constructor(
    @InjectRepository(Checklist)
    private readonly checklistsRepository: Repository<Checklist>,
  ) {}

  async create(userId: number, createChecklistDto: CreateChecklistDto) {

    const newChecklist = new Checklist(<Checklist>{
      user_id: userId,
      ...createChecklistDto,
    });

    return this.checklistsRepository.save(newChecklist);
  }

  async findOne(id: number) {
    const existing = await this.checklistsRepository.findOneBy({ id });

    if (!existing) return null;

    return existing;
  }

  async findAll() {
    return this.checklistsRepository.find();
  }

  async remove(id: number) {
    // Find First
    await this.findOne(id);
    // Delete when existing
    return this.checklistsRepository.delete(id);
  }
}
