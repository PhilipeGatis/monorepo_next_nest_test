import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FileImport } from './entities/fileImport.entity'

@Module({
  imports: [TypeOrmModule.forFeature([FileImport])],
})
export class FilesImportModule {}
