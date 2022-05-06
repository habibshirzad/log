import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogController } from '../controller/log.controller';
import { User } from '../entity/user.entity';
import { LogService } from '../service/log.service';

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers:[LogController],
    providers:[LogService],
})
export class LogModule {}
