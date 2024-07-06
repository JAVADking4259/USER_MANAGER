import { Controller, Get, Post, Body, Param, Put, Delete, ValidationPipe } from "@nestjs/common";
import {authService} from './auth.service'
import {auth} from './entity/auth.ent'


@Controller('api/auth')
export class authController{
    constructor(private readonly authService: authService) {}

    @Get()
    getAll():Promise<auth[]>{
        return this.authService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id:number){
        return this.authService.getOne(Number(id));
    }

    @Post()
    create(@Body(new ValidationPipe()) user:auth):Promise<auth>{
        return this.authService.create(user);
    }

    @Put(':id')
    update(@Body() user:auth,@Param('id') id:number):Promise<auth>{
        return this.authService.update(Number(id),user)
    }

    @Delete(':id')
    delete(@Param('id') id:number):Promise<void>{
        return this.authService.delete(Number(id));
    }
}