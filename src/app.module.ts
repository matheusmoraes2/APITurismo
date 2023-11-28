import { Module } from '@nestjs/common';
import { UserController } from './controller/User.controller';
import { UserService } from './service/User.service';
import { UserRepository } from './repository/User.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserRepository, PrismaService],
})
export class AppModule { }
