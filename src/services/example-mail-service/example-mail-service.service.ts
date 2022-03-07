import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleMailServiceService {
  constructor(private readonly mailerService: MailerService) {}

  public sendEmail(): void {
    this.mailerService
      .sendMail({
        to: 'ebaron@wiser.com',
        from: 'edgar.baron@bairesdev.com',
        subject: 'Testing Nest Mailermodule with template ✔',
        template: 'mailTemplate', // The `.pug`, `.ejs` or `.hbs` extension is appended automatically.
        context: {
          // Data to be sent to template engine.
          username: 'Edgar',
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }
}
