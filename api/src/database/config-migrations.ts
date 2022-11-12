import { commonDbOptions } from './config'
import { DataSource, DataSourceOptions } from 'typeorm'

const dataSource = new DataSource(commonDbOptions as DataSourceOptions)

export default dataSource
