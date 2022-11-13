import { readFileSync } from 'fs'
import { Express } from 'express'
import { convertFileToProductList } from '../fileImportParser'
import productListMock from './productList.mock'

describe('The FilesImportService', () => {
  const fileTxt = `${__dirname}/sales.txt`
  describe('productsService', () => {
    it('should read and create product list', async () => {
      const fileBuffer = readFileSync(fileTxt)
      const file: Express.Multer.File = {
        buffer: fileBuffer,
        originalname: 'sales.txt',
        fieldname: '',
        encoding: '',
        mimetype: '',
        size: 0,
        stream: null,
        destination: '',
        filename: '',
        path: '',
      }
      const value = await convertFileToProductList(file)
      expect(JSON.stringify(value)).toBe(JSON.stringify(productListMock))
    })
  })
})
