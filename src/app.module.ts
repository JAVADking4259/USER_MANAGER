import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'

import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { auth } from './auth/entity/auth.ent';


@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true, 
      envFilePath:'.env'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [auth],
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
