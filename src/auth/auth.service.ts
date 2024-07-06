import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {auth} from './entity/auth.ent'
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class authService{
    constructor(
        @InjectRepository(auth)
        private authRepository: Repository<auth>,
        private readonly jwt:JwtService
      ) {}

    getAll():Promise<auth[]>{
        return this.authRepository.find();
    }  

   async getOne(id:number){
      const data = await this.authRepository.findOneBy({id})
      return {
        token:this.jwt.sign({id}),
        data
      }
    }

    create(user:auth):Promise<auth>{
        return this.authRepository.save(user)
    }

   async update(id:number,user:auth):Promise<auth>{
        await this.authRepository.update(id,user)
        return this.authRepository.findOneBy({id})
    }

    async delete(id:number):Promise<void>{
        await this.authRepository.delete(id)
    }

}