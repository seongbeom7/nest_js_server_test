import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { CreateUserDto } from './create-users.dto';
import { User } from './users.entity';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUser(id: number): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new User();
    newUser.name = createUserDto.name;
    newUser.email = createUserDto.email;
    return this.userRepository.create(newUser);
  }

//   async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
//     return this.userRepository.update(id, updateUserDto);
//   }

  async deleteUser(id: number): Promise<boolean> {
    return this.userRepository.delete(id);
  }
}