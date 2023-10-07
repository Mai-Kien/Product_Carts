import { Product } from "../entites/product.entity";
declare const _default: (() => {
    port: number;
    mysql: {
        type: string;
        host: string;
        port: number;
        username: string;
        database: string;
        entities: (typeof Product)[];
        retryAttempts: number;
        synchronize: boolean;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    port: number;
    mysql: {
        type: string;
        host: string;
        port: number;
        username: string;
        database: string;
        entities: (typeof Product)[];
        retryAttempts: number;
        synchronize: boolean;
    };
}>;
export default _default;
