import { ProductsService } from '../products.service'
import { Test } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Product } from '../entities/product.entity'
import mockedFindAllByDescription from './findAllByDescription.mock'
import mockedFindAllProductsGroupedByDescription from './findAllProductsGroupedByDescription.mock'
import productListMock from './productList.mock'

describe('The ProductsService', () => {
  let productsService: ProductsService
  beforeEach(async () => {
    const productRepository = {
      find: jest.fn(props =>
        Promise.resolve(productListMock.filter(item => item.description === props.where.description)),
      ),
      createQueryBuilder: jest.fn(() => ({
        select: jest.fn().mockReturnThis(),
        groupBy: jest.fn().mockReturnThis(),
        getRawMany: jest.fn().mockReturnValue(
          Promise.resolve(
            productListMock.reduce((acc, value) => {
              if (acc.some(item => item.description === value.description)) {
                return acc
              }
              acc.push({ description: value.description })
              return acc
            }, []),
          ),
        ),
      })),
    }

    const module = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useValue: productRepository,
        },
      ],
    }).compile()
    productsService = await module.get(ProductsService)
  })
  describe('productsService', () => {
    it('should return a product list', async () => {
      const title = mockedFindAllByDescription[0].title
      const response = await productsService.findAllByDescription(title)
      expect(response).toEqual(productListMock.filter(item => item.description === title))
    })
    it('should return a product description list', async () => {
      const response = await productsService.findAllProductsGroupedByDescription()
      expect(response).toEqual(mockedFindAllProductsGroupedByDescription)
    })
  })
})
