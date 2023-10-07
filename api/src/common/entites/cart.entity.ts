import { Column, Entity } from 'typeorm';
import { BaseMysqlEntity } from './base-mysql.entity'

@Entity({ name: 'cart' })
export class Cart extends BaseMysqlEntity {
    @Column({ unique: true })
    product_name: string;

    @Column()
    product_img: string;

    @Column()
    product_price: number;

    @Column()
    product_description: string;

    @Column()
    old_product_quantity: number;

    @Column()
    product_quantity: number;

    @Column()
    product_total: number;

}
