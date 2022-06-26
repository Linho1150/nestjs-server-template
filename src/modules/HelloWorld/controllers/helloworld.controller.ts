import { Controller, Get } from '@nestjs/common';

@Controller()
export class HelloworldController {
  @Get()
  hello() {
    return __dirname;
  }
}
