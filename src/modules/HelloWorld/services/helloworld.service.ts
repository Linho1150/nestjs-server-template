import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloworldService {
  getSample(): string {
    return 'hello world';
  }
}
