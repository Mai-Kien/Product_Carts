import { Module } from '@nestjs/common'
import {Cart} from '../common/entites/cart.entity'

import {Product} from '../common/entites/product.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

import {ProductService} from './product.service'
import{ProductController} from './product.controller'

const typeOrm = [
    Cart,
    Product,
]

@Module({
    imports: [
        TypeOrmModule.forFeature(typeOrm),
    ],
    controllers: [ProductController],
    providers: [ProductService],
})
export class ProductModule { }