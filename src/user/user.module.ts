import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { Logger } from './logger.provider';
import { UserController } from './user.controller';
import { UserLifeCycle } from './user.lifecycle';
@Module({
  providers: [UserService, Logger, UserLifeCycle],
  controllers: [UserController],
})
export class UserModule {}

/*

 -Modules help organize your application into smaller parts.
 -Each module groups related code, like controllers and services, 
  making it easier to manage the codebase.

*/
