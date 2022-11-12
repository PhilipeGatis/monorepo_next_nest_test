import { registerAs } from '@nestjs/config'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { join } from 'path'

export const commonDbOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'hubla',
  password: 'hubla',
  database: 'hubla',
  entities: [join(__dirname, '../**/**/*entity{.ts,.js}')],
}

export const typeormModuleOptions: TypeOrmModuleOptions = {
  ...commonDbOptions,
  autoLoadEntities: true,
  migrationsRun: true,
  migrations: [join(__dirname, './migration/**/*{.ts,.js}')],
  synchronize: false,
  logging: true,
  logger: 'file',
}

export default registerAs('database', () => ({
  config: typeormModuleOptions,
}))
