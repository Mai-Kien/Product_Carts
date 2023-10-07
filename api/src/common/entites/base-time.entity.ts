import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseDateTime {
    constructor() { }
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
