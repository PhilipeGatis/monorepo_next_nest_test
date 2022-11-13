import { ProductResponseDto } from './ProductResponse.dto'
import { ApiProperty } from '@nestjs/swagger'

export class ProductListGroupedByDescriptionResponseDto {
  @ApiProperty()
  title: string

  @ApiProperty({
    type: ProductResponseDto,
  })
  list: ProductResponseDto[]
}
