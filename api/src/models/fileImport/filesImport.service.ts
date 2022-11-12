import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { FileImport } from './entities/fileImport.entity'
import { Express } from 'express'
import { convertFileToProductList } from '../../common/processors/fileImportParser'

@Injectable()
export class FilesImportService {
  constructor(
    @InjectRepository(FileImport)
    private fileImportsRepository: Repository<FileImport>,
  ) {}

  findAll(): Promise<FileImport[]> {
    return this.fileImportsRepository.find()
  }

  findOne(id: number): Promise<FileImport> {
    return this.fileImportsRepository.findOneBy({ id })
  }

  async create(file: Express.Multer.File): Promise<void> {
    const newFileImport = this.fileImportsRepository.create()

    const list = await convertFileToProductList(file)

    newFileImport.products = list.map(item => ({ ...item, fileImport: newFileImport }))

    this.fileImportsRepository.save(newFileImport)
  }
}
