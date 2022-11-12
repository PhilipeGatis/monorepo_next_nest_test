import { ApiProperty } from '@nestjs/swagger'
import { ProductTypeResponseDto } from './ProductTypeResponse.dto'

export class ProductResponseDto {
  @ApiProperty()
  id: number

  @ApiProperty()
  date: Date

  @ApiProperty()
  description: string

  @ApiProperty()
  value: number

  @ApiProperty()
  seller: string

  @ApiProperty({ type: ProductTypeResponseDto })
  type: ProductTypeResponseDto
}
