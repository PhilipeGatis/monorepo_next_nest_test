import { FilesImportService } from '../filesImport.service'
import { Test } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { FileImport } from '../entities/fileImport.entity'
import { readFileSync } from 'fs'
import { Express } from 'express'

describe('The FilesImportService', () => {
  let filesImportService: FilesImportService
  const fileTxt = `${__dirname}/sales.txt`
  const productRepository = {
    create: jest.fn().mockReturnThis(),
    save: jest.fn().mockReturnThis(),
  }
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        FilesImportService,
        {
          provide: getRepositoryToken(FileImport),
          useValue: productRepository,
        },
      ],
    }).compile()
    filesImportService = await module.get(FilesImportService)
  })
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
      await filesImportService.create(file)
      expect(productRepository.create).toBeCalledTimes(1)
      expect(productRepository.save).toBeCalledTimes(1)
    })
  })
})
