import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Ariel Paucar el hombre mas fiel del mundo!';
  }
}
