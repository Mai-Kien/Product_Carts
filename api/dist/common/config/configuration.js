"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const product_entity_1 = require("../entites/product.entity");
const cart_entity_1 = require("../entites/cart.entity");
exports.default = (0, config_1.registerAs)('cfg', () => ({
    port: parseInt(process.env.PORT, 10) || 6789,
    mysql: {
        type: 'mysql',
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_PORT),
        username: process.env.MYSQL_USER,
        database: process.env.MYSQL_DATABASE,
        entities: [product_entity_1.Product, cart_entity_1.Cart],
        retryAttempts: 9999,
        synchronize: false,
    }
}));
//# sourceMappingURL=configuration.js.map