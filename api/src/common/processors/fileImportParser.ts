import { parseISO } from 'date-fns'
import { Product } from '../../models/product/entities/product.entity'
import { ProductType } from '../../models/product/entities/productType.entity'

const convertLineToProduct = (line: string): Product => {
  const product = new Product()

  const typeId = line.substring(0, 1).trim()
  const date = line.substring(1, 26).trim()
  const description = line.substring(26, 56).trim()
  const value = line.substring(56, 66).trim()
  const seller = line.substring(66, 86).trim()

  const productType = new ProductType()
  productType.id = parseInt(typeId)
  product.type = productType
  product.date = parseISO(date)
  product.description = description
  product.value = parseInt(value)
  product.seller = seller
  return product
}

export const convertFileToProductList = async (file: Express.Multer.File): Promise<Product[]> => {
  const productList: Product[] = []
  const lines = file.buffer.toString().split('\n')

  for (const line of lines) {
    if (line) productList.push(convertLineToProduct(line))
  }

  return productList
}
