import { BaseMysqlEntity } from './base-mysql.entity';
export declare class Product extends BaseMysqlEntity {
    product_name: string;
    product_img: string;
    product_price: number;
    product_description: string;
    product_quantity: number;
    product_total: number;
}
