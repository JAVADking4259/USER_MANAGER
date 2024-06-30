import { Module } from '@nestjs/common';

import {authController} from './auth.controller'
import { authService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { auth } from './entity/auth.ent';

@Module({
    imports:[TypeOrmModule.forFeature([auth])],
    providers:[authService],
    controllers:[authController]
})
export class AuthModule {}
