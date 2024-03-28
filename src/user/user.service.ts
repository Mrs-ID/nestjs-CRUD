import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    findAllUsers(): Promise<User[]> {
        return this.userModel.find();
    }

    findUserById(id: any): Promise<User> {
        return this.userModel.findById(id).exec()
    }

    addUser(u: User): Promise<User> {
        const user = new this.userModel(u).save()
        return user
    }

    updateUser(u: User, id: string) {
        return this.userModel.findByIdAndUpdate(id, u).exec()
    }

    deleteUser(id: string) {
        return this.userModel.findByIdAndDelete(id).exec()
    }
}