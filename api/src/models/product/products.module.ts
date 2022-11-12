import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Product } from './entities/product.entity'
import { ProductType } from './entities/productType.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductType])],
})
export class ProductsModule {}
