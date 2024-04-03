// user.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto}from './create-users.dto'
import { UpdateUserDto } from './update-users.dto';
import { User } from './users.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User | null> {
    return this.userService.getUser(id);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

//   @Put(':id')
//   async updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<User | null> {
//     return this.userService.updateUser(id, updateUserDto);
//   }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<boolean> {
    return this.userService.deleteUser(id);
  }
}

