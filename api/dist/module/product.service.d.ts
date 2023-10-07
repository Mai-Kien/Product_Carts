import { Repository } from 'typeorm';
import { Cart } from "../common/entites/cart.entity";
import { Product } from "../common/entites/product.entity";
export declare class ProductService {
    private cartsRepository;
    private productsRepository;
    constructor(cartsRepository: Repository<Cart>, productsRepository: Repository<Product>);
    getAllProduct(): Promise<Product[]>;
    getAllCart(): Promise<Cart[]>;
    createProduct(data: any): Promise<Product[]>;
    createCart(data: any): Promise<Cart[]>;
    getDetailsProduct(id: any): Promise<Product>;
    deleteCart(id: any, data: any): Promise<void>;
    updateProductWhenDeleteCart(product_name: any, old_product_quantity: any): Promise<void>;
    updateCart(id: any, data: any): Promise<import("typeorm").UpdateResult>;
}
