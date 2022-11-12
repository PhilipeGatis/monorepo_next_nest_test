import { ReactElement } from 'react'
import Box from '@mui/material/Box'
import Layout from '../components/template/Layout'

function HomePage() {
  return <Box>Welcome to Next.js!</Box>
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default HomePage
