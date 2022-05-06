import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { CreateUserDto } from '../dto/user.dto';
import { Repository } from 'typeorm';
import {logger} from '../logger/winstonLogger'



@Injectable()
export class LogService {

    //logger instance
    private readonly logger = new Logger(LogService.name)

    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,   
    ){}
    

    async create(createUserDto:CreateUserDto){
        const newUser =  this.usersRepository.create(createUserDto)
        
        if (newUser){
            logger.info(newUser)
            return await this.usersRepository.save(newUser) 
        }
        logger.error('couldnt create the user.')
        return 'couldnt create the user.'
    }

    async findAll(){
        const user = await this.usersRepository.find()
        if (user){
            logger.info({ microservice: 'test' })
            return user
        }
        logger.error('user doesnt exist')
        return 'no user found.'
    }


    async findOne(id: number){
        logger.info({
                    'message':'Error product not found',
                    'microserviceName':'kaspiProduct',      
                })
        return
        const user = await this.usersRepository.findOne(id);

        if (user){
            logger.info(user)
            return user
        }
        logger.error('user doesnt exist', {id})
        return 'user does not exist.'
        
        
    }
}

