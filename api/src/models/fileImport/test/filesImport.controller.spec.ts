import { FilesImportController } from '../filesImport.controller'
import { FilesImportService } from '../filesImport.service'
import { Test } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { FileImport } from '../entities/fileImport.entity'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'

describe('FilesImportController', () => {
  let app: INestApplication
  const fileTxt = `${__dirname}/sales.txt`
  const fileDoc = `${__dirname}/sales.doc`
  beforeEach(async () => {
    const fileImportRepository = {
      create: jest.fn().mockReturnThis(),
      save: jest.fn().mockReturnThis(),
    }

    const module = await Test.createTestingModule({
      controllers: [FilesImportController],
      providers: [
        FilesImportService,
        {
          provide: getRepositoryToken(FileImport),
          useValue: fileImportRepository,
        },
      ],
    }).compile()

    app = module.createNestApplication()
    await app.init()
  })

  describe('Upload product list file', () => {
    it('should return success if is txt file', async () => {
      await request(app.getHttpServer()).post('/filesImport').attach('file', fileTxt).expect(201)
    })

    it('should return error if is different txt file', async () => {
      await request(app.getHttpServer()).post('/filesImport').attach('file', fileDoc).expect(422)
    })
  })
})
