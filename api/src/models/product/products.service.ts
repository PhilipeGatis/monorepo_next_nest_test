import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Product } from './entities/product.entity'

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  findAllByDescription(value: string): Promise<Product[]> {
    return this.productRepository.find({
      where: {
        description: value,
      },
      relations: {
        type: true,
      },
      order: {
        date: 'asc',
      },
    })
  }

  async findAllProductsGroupedByDescription(): Promise<string[]> {
    const values = await this.productRepository
      .createQueryBuilder()
      .select('description')
      .groupBy('description')
      .getRawMany()
    return values.map(item => item.description)
  }
}
