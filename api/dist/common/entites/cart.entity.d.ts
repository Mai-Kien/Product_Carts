import { BaseMysqlEntity } from './base-mysql.entity';
export declare class Cart extends BaseMysqlEntity {
    product_name: string;
    product_img: string;
    product_price: number;
    product_description: string;
    old_product_quantity: number;
    product_quantity: number;
    product_total: number;
}
