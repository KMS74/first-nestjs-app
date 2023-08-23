/*
 - Pipes are a mechanism for processing and validating input data before it is handled by a controller method or passed to a service



*/

import { Injectable, PipeTransform } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class EnrichedUserPipe implements PipeTransform {
  // Method to implement a custom pipe.
  transform(userDto: UserDto): UserDto {
    const enrichedUser: UserDto = {
      ...userDto,
      createdAt: new Date(), // enriching the user with creation timestamp
    };
    return enrichedUser;
  }
}
