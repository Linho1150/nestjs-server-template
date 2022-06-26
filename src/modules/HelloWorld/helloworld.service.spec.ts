import { Test, TestingModule } from '@nestjs/testing';

import { HelloworldService } from './helloworld.service';

describe('HelloworldService', () => {
  let helloworldService: HelloworldService;

  beforeEach(async () => {
    const sample: TestingModule = await Test.createTestingModule({
      providers: [HelloworldService],
    }).compile();

    helloworldService = sample.get<HelloworldService>(HelloworldService);
  });

  describe('root', () => {
    it('should return "sample"', () => {
      expect(helloworldService.getSample()).toBe('sample');
    });
  });
});
