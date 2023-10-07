import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAllVideo(): Promise<{
        message: import("../common/entites/product.entity").Product[];
    }>;
    getDetailsProduct(params: any): Promise<{
        message: import("../common/entites/product.entity").Product;
    }>;
    getAllCart(): Promise<{
        message: import("../common/entites/cart.entity").Cart[];
    }>;
    addCart(data: any): Promise<{
        message: import("../common/entites/cart.entity").Cart[];
    }>;
    deleteCart(params: any, data: any): Promise<void>;
    updateCart(params: any, data: any): Promise<import("typeorm").UpdateResult>;
    formCreateProduct(): Promise<void>;
    createNewProduct(data: any): Promise<import("../common/entites/product.entity").Product[]>;
}
