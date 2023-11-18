import { Repository } from 'typeorm';
export declare abstract class Service {
    protected readonly repository: Repository<any>;
    constructor(repository: Repository<any>);
}
