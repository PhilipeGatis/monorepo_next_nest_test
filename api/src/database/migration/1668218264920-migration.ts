import { MigrationInterface, QueryRunner } from 'typeorm'

export class migration1668218264920 implements MigrationInterface {
  name = 'migration1668218264920'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`product_type\` (\`id\` int NOT NULL AUTO_INCREMENT, \`descriptions\` varchar(255) NOT NULL, \`nature\` varchar(255) NOT NULL, \`signal\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    )
    await queryRunner.query(
      `CREATE TABLE \`file_import\` (\`id\` int NOT NULL AUTO_INCREMENT, \`upload_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    )
    await queryRunner.query(
      `CREATE TABLE \`product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` timestamp NOT NULL, \`description\` varchar(255) NOT NULL, \`value\` int NOT NULL, \`seller\` varchar(255) NOT NULL, \`typeId\` int NULL, \`fileImportId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    )
    await queryRunner.query(
      `ALTER TABLE \`product\` ADD CONSTRAINT \`FK_53bafe3ecc25867776c07c9e666\` FOREIGN KEY (\`typeId\`) REFERENCES \`product_type\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE \`product\` ADD CONSTRAINT \`FK_b129c2cfc10aa6681024fe68cf3\` FOREIGN KEY (\`fileImportId\`) REFERENCES \`file_import\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_b129c2cfc10aa6681024fe68cf3\``)
    await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_53bafe3ecc25867776c07c9e666\``)
    await queryRunner.query(`DROP TABLE \`product\``)
    await queryRunner.query(`DROP TABLE \`file_import\``)
    await queryRunner.query(`DROP TABLE \`product_type\``)
  }
}
