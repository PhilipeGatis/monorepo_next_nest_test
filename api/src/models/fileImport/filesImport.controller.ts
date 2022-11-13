import { Controller, Post, UploadedFile, UseInterceptors, ParseFilePipeBuilder, HttpStatus } from '@nestjs/common'
import { Express } from 'express'
import { FileInterceptor } from '@nestjs/platform-express'
import { FilesImportService } from './filesImport.service'
import { ApiConsumes, ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger'

@ApiTags('FilesImport')
@Controller('filesImport')
export class FilesImportController {
  constructor(private readonly filesImportService: FilesImportService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Upload products list txt file.',
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
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Processed with success' })
  @ApiResponse({ status: HttpStatus.UNPROCESSABLE_ENTITY, description: 'Unprocessable entity' })
  @UseInterceptors(FileInterceptor('file'))
  async createPost(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'text/plain',
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
  ) {
    await this.filesImportService.create(file)
  }
}
