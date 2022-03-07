import { ExampleMailServiceService } from './services/example-mail-service/example-mail-service.service';
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private exampleMailService: ExampleMailServiceService) {}

  @Post('/sendEmail')
  senEmail(): void {
    console.log('Email was sent.');
    
    return this.exampleMailService.sendEmail();
  }
}
