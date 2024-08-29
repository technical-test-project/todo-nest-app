import { Module } from '@nestjs/common';
import { EnvModule } from './env/env.module';
import { DatabaseModule } from './database/database.module';
import { ChecklistsModule } from './module/checklists/checklists.module';
import { AuthModule } from './module/auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './module/auth/auth.contants';
import { LocalStrategy } from './module/auth/strategies/local.strategy';
import { JwtStrategy } from './module/auth/strategies/jwt.strategy';

@Module({
  imports: [
    EnvModule,
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
    AuthModule,
    ChecklistsModule,
  ],
  controllers: [],
  providers: [LocalStrategy, JwtStrategy],
})
export class AppModule {}
