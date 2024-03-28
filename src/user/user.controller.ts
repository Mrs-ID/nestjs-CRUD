import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    findAllUsers(): Promise<User[]> {
        return this.userService.findAllUsers()
    }

    @Get(':id')
    findUserById(@Param('id') id: string): Promise<User> {
        return this.userService.findUserById(id)
    }

    @Post()
    addUser(@Body() u: User) {
        return this.userService.addUser(u)
    }

    @Put(':id')
    updateUser(@Body() u: User, @Param('id') id: string) {
        return this.userService.updateUser(u, id)
    }

    @Delete()
    deleteUser(@Body() u: User) {
        return this.userService.deleteUser(u.id)
    }
}
