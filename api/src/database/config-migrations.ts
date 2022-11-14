import { commonDbOptions } from './config'
import * as dotenv from 'dotenv'
import { DataSource, DataSourceOptions } from 'typeorm'

dotenv.config()
const dataSource = new DataSource(commonDbOptions() as DataSourceOptions)

export default dataSource
