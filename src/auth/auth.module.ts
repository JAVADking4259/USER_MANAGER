import { Module } from '@nestjs/common';

import {authController} from './auth.controller'
import { authService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { auth } from './entity/auth.ent';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports:[TypeOrmModule.forFeature([auth]),
PassportModule,
JwtModule.registerAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      secret: configService.get<string>('JWT_SECRET_KEY'),
      signOptions: { expiresIn: configService.get<string>('JWT_EXPIRE_TIME') },
    }),
    inject: [ConfigService],
  }),
],
    providers:[authService],
    controllers:[authController]
})
export class AuthModule {}
