import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FilesImportController } from './filesImport.controller'
import { FilesImportService } from './filesImport.service'
import { FileImport } from './entities/fileImport.entity'

@Module({
  imports: [TypeOrmModule.forFeature([FileImport])],
  controllers: [FilesImportController],
  providers: [FilesImportService],
})
export class FilesImportModule {}
