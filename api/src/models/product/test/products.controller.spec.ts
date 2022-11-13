import { ProductsController } from '../products.controller'
import { ProductsService } from '../products.service'
import { Test } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Product } from '../entities/product.entity'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import mockedFindAllByDescription from './findAllByDescription.mock'
import productListMock from './productList.mock'

describe('ProductsController', () => {
  let app: INestApplication

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
      controllers: [ProductsController],
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useValue: productRepository,
        },
      ],
    }).compile()

    app = module.createNestApplication()
    await app.init()
  })

  describe('fetch all product list grouped by description', () => {
    it('should return success', async () => {
      const response = await request(app.getHttpServer()).get('/products').send().expect(200)
      expect(JSON.stringify(response.body)).toBe(JSON.stringify(mockedFindAllByDescription))
    })
  })
})
