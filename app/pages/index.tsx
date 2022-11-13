import { ReactElement, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Layout from '../components/template/Layout'
import DataGrid from '../components/organisms/DataGrid'
import UploadButton from '../components/molecules/UploadButton'
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
      <Box sx={{ display: 'flex', mb: 2 }}>
        {!!list.length && <UploadButton />}
        <div style={{ flex: 1 }} />
        <Button variant="outlined" onClick={fetch}>
          Atualizar
        </Button>
      </Box>
      <DataGrid data={list} />
    </Box>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default HomePage
