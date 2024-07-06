import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {ExtractJwt,Strategy} from 'passport-jwt'
import { auth } from "src/auth/entity/auth.ent";
import { Repository } from 'typeorm';


@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){
    constructor(private readonly repository:Repository<auth>){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET_KEY
        })
    }

    async validate(payload:{id:number}){
        const user = await this.repository.findBy({
          id:payload.id
        })
        return user;
     }
}