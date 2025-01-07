import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  // array of users
  private readonly users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
    },
  ];

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  // takes an argument of type User and omitting the id
  // It generates a new id for the user and adds the user to the array of users
  create(userDto: UserDto): User {
    const user: User = { ...userDto, id: this.users.length + 1 };
    this.users.push(user);
    return user;
  }
}

/* 
 - Services are classes that contain the core logic of your application, 
    like handling user actions.

 - The service classes are annotated with the @Injectable decorator so that they can be
    injected into controllers or other services using the dependency injection system.

*/
