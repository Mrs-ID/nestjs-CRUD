import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserSchema } from './user/user.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/CRUD_nestjs'),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
  ],
  controllers: [/*AppController,*/ UserController],
  providers: [/*AppService,*/ UserService],
})
export class AppModule { }