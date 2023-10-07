import { IsUUID } from 'class-validator';

import { BaseDateTime } from './base-time.entity';
import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseMysqlEntity extends BaseDateTime {
    @IsUUID()
    @PrimaryGeneratedColumn('uuid')
    id: string;
}
