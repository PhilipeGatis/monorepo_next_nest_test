import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductsService } from './products.service'
import { Product } from './entities/product.entity'
import { ProductType } from './entities/productType.entity'
import { ProductsController } from './products.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductType])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
