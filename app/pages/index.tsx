import { ReactElement, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Layout from '../components/template/Layout'
import DataGrid from '../components/organisms/DataGrid'
import { fetchProductList } from '../lib/api'
import { ProductListGroupedByDescriptionResponseDto } from '@hubla/api/dist/models/product/dto/ProductListGroupedByDescriptionResponse.dto'

function HomePage() {
  const [list, setList] = useState<ProductListGroupedByDescriptionResponseDto[]>([])

  const fetch = async () => {
    setList(await fetchProductList())
  }

  useEffect(() => {
    fetch()
  }, [])
  return (
    <Box>
      <DataGrid data={list} />
    </Box>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default HomePage
