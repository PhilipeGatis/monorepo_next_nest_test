import { registerAs } from '@nestjs/config'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { join } from 'path'

export const commonDbOptions = (): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_PASSWORD,
  entities: [join(__dirname, '../**/**/*entity{.ts,.js}')],
})

export const typeormModuleOptions = (): TypeOrmModuleOptions => ({
  ...commonDbOptions(),
  autoLoadEntities: true,
  migrationsRun: true,
  migrations: [join(__dirname, './migration/**/*{.ts,.js}'), join(__dirname, './seed/**/*{.ts,.js}')],
  synchronize: false,
  logging: true,
  logger: 'file',
})

export default registerAs('database', () => ({
  config: typeormModuleOptions(),
}))
