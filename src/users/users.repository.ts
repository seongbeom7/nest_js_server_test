import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UserRepository {
private users: User[] = [];

findById(id: number): Promise<User | null> {
    const user = this.users.find(user => user.id === id);
    return Promise.resolve(user || null);
}

findAll(): Promise<User[]> {
    return Promise.resolve(this.users);
}

create(user: User): Promise<User> {
    const newUser = { ...user, id: this.users.length + 1 };
    this.users.push(newUser);
    return Promise.resolve(newUser);
}

// update(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
//     const index = this.users.findIndex(user => user.id === id);
//     if (index === -1) {
// return Promise.resolve(null);
//     }
//     this.users[index] = { ...this.users[index], ...updateUserDto };
//     return Promise.resolve(this.users[index]);
// }

delete(id: number): Promise<boolean> {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
return Promise.resolve(false);
    }
    this.users.splice(index, 1);
    return Promise.resolve(true);
}
}