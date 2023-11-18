import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export abstract class Service {
  constructor(protected readonly repository: Repository<any>) {}
}
