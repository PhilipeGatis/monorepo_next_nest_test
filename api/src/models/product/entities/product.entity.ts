import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { ProductType } from './productType.entity'
import { FileImport } from '../../fileImport/entities/fileImport.entity'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'timestamp' })
  date: Date

  @Column()
  description: string

  @Column()
  value: number

  @Column()
  seller: string

  @ManyToOne(() => ProductType, type => type.id, { eager: true })
  type: ProductType

  @ManyToOne(() => FileImport, fileImport => fileImport.id, { cascade: true })
  fileImport: FileImport
}
