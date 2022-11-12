import { Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm'
import { Product } from '../../product/entities/product.entity'

@Entity({ name: 'file_import' })
export class FileImport {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn({ name: 'upload_at', type: 'timestamp' })
  uploadAt: Date

  @OneToMany(() => Product, product => product.id)
  products: Product[]
}
