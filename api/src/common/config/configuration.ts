import { registerAs } from "@nestjs/config";
import { Product } from "../entites/product.entity"
import { Cart } from "../entites/cart.entity"

export default registerAs('cfg', () => ({
    port: parseInt(process.env.PORT, 10) || 6789,
    mysql: {
        type: 'mysql',
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_PORT),
        username: process.env.MYSQL_USER,
        // password: process.env.MYSQL_ROOT_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        entities: [Product, Cart],
        retryAttempts: 9999,
        synchronize: false,
    }
}))
