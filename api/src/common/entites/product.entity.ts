import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseMysqlEntity } from './base-mysql.entity'
import { Exclude } from 'class-transformer';

import * as bcrypt from 'bcrypt';

@Entity({ name: 'product' })
export class Product extends BaseMysqlEntity {
    @Column({ unique: true })
    product_name: string;

    @Column()
    product_img: string;

    @Column()
    product_price: number;

    @Column()
    product_description: string;

    @Column()
    product_quantity: number;

    @Column()
    product_total: number;

}