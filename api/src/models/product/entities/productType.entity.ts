import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'product_type' })
export class ProductType {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  descriptions: string

  @Column()
  nature: string

  @Column({ default: true })
  signal: boolean
}
