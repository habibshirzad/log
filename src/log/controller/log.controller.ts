import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dto';
import { logger } from '../logger/winstonLogger';
import { LogService } from '../service/log.service';

@Controller('log')
export class LogController {

    constructor(private readonly logService:LogService
        ){}


    @Post()
    create(@Body() createUserDto:CreateUserDto) {
        return this.logService.create(createUserDto)
    }

    @Get()
    findAll() {
        return this.logService.findAll()  
    }

    @Get(':id')
    findOne(@Param('id')  id:number){
        return this.logService.findOne(Number(id))    
    }
}



    