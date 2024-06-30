import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { auth } from './auth/entity/auth.ent';

@Module({
  imports: [AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'javadKING',
      database: 'postgres',
      entities: [auth],
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
