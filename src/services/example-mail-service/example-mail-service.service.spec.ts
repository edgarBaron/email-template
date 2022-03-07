import { Test, TestingModule } from '@nestjs/testing';
import { ExampleMailServiceService } from './example-mail-service.service';

describe('ExampleMailServiceService', () => {
  let service: ExampleMailServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExampleMailServiceService],
    }).compile();

    service = module.get<ExampleMailServiceService>(ExampleMailServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
