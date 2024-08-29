import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login-auth.dto';
import * as bcryptjs from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser({ username, password }: LoginAuthDto): Promise<any> {
    const user = await this.usersRepository.findOne({ where: { username } });
    if (user && (await bcryptjs.compare(password, user.password))) {
      return await this.login(user);
    }
    return null;
  }

  async login(user: User): Promise<{ access_token: string } | null> {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(registerAuthDto: RegisterAuthDto) {
    const { username, password } = registerAuthDto as User;

    const existingUser = await this.usersRepository.findOne({
      where: { username },
    });
    if (existingUser) {
      return null;
    }

    const newUser = new User(<User>{
      ...registerAuthDto,
      password: bcryptjs.hashSync(password, 10),
    });

    await this.usersRepository.save(newUser);

    return await this.login(newUser);
  }
}
