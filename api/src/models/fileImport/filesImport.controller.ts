import { Controller, Get, Param, Post, UploadedFile, ParseIntPipe, UseInterceptors } from '@nestjs/common'
import { Express } from 'express'
import { FileInterceptor } from '@nestjs/platform-express'
import { FilesImportService } from './filesImport.service'
import { ApiConsumes, ApiTags, ApiBody } from '@nestjs/swagger'

@ApiTags('FilesImport')
@Controller('filesImport')
export class FilesImportController {
  constructor(private readonly filesImportService: FilesImportService) {}

  @Get()
  async getMany() {
    const data = await this.filesImportService.findAll()
    return { data }
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.filesImportService.findOne(id)
    return { data }
  }

  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async createPost(@UploadedFile() file: Express.Multer.File) {
    await this.filesImportService.create(file)
  }
}
