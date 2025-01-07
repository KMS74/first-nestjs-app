import { Injectable } from '@nestjs/common';

@Injectable()
export class Logger {
  private readonly messages: string[] = [];
  log(message: string): void {
    this.messages.push(message);
    this.printAllMessages();
  }

  printAllMessages(): void {
    this.messages.forEach((message) => console.log(message));
  }
}

/*
 - Providers are a way to define reusable code.
 
 - They usually contain logic that is not specific to a controller or module
    but is more general like connecting to a database, sending emails, or performing calculations.

 - Providers are defined as classes with the @Injectable decorator, just like services.

*/
