import { ProductResponseDto } from './ProductResponse.dto'
import { ApiProperty, getSchemaPath } from '@nestjs/swagger'

export default class ProductListGroupedByDescriptionResponseDto {
  @ApiProperty()
  title: string

  @ApiProperty({
    type: ProductResponseDto,
  })
  list: ProductResponseDto[]
}
