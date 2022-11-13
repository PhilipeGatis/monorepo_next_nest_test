import { Controller, Get } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ProductListGroupedByDescriptionResponseDto } from './dto/ProductListGroupedByDescriptionResponse.dto'
import { ApiTags, ApiOkResponse } from '@nestjs/swagger'

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOkResponse({
    type: ProductListGroupedByDescriptionResponseDto,
    isArray: true,
  })
  async getMany(): Promise<ProductListGroupedByDescriptionResponseDto[]> {
    const result = []
    const descriptions = await this.productsService.findAllProductsGroupedByDescription()

    for (const description of descriptions) {
      const data = await this.productsService.findAllByDescription(description)
      const dtoValue = new ProductListGroupedByDescriptionResponseDto()
      dtoValue.title = description
      dtoValue.list = data
      result.push(dtoValue)
    }

    return result
  }
}
