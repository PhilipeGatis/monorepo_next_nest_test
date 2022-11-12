import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { ProductType } from './productType.entity'
import { FileImport } from '../../fileImport/entities/fileImport.entity'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  date: string

  @Column()
  description: string

  @Column()
  value: number

  @Column()
  seller: string

  @Column({ default: true })
  signal: boolean

  @ManyToOne(() => ProductType, type => type.id)
  type: ProductType

  @ManyToOne(() => FileImport, fileImport => fileImport.id)
  fileImport: FileImport
}
