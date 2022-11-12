import { ApiProperty } from '@nestjs/swagger'

export class ProductTypeResponseDto {
  @ApiProperty()
  id: number

  @ApiProperty()
  descriptions: string

  @ApiProperty()
  nature: string

  @ApiProperty()
  signal: boolean
}
