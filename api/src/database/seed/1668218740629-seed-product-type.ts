import { MigrationInterface, QueryRunner } from 'typeorm'
import { ProductType } from '../../models/product/entities/productType.entity'

export class seed1668218740629 implements MigrationInterface {
  name = 'seed1668218740629'
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.save(
      queryRunner.manager.create<ProductType>(ProductType, {
        id: 1,
        descriptions: 'Venda produtor',
        nature: 'Entrada',
        signal: true,
      }),
    )
    await queryRunner.manager.save(
      queryRunner.manager.create<ProductType>(ProductType, {
        id: 2,
        descriptions: 'Venda afiliado',
        nature: 'Entrada',
        signal: true,
      }),
    )
    await queryRunner.manager.save(
      queryRunner.manager.create<ProductType>(ProductType, {
        id: 3,
        descriptions: 'Comissão paga',
        nature: 'Saida',
        signal: false,
      }),
    )
    await queryRunner.manager.save(
      queryRunner.manager.create<ProductType>(ProductType, {
        id: 4,
        descriptions: 'Comissão recebida',
        nature: 'Entrada',
        signal: true,
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM product_type`)
  }
}
