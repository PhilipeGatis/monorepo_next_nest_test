import React, { ReactNode } from 'react'
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

interface iLayout {
  children: ReactNode
}

const Layout: React.FC<iLayout> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hubla test
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Container sx={{ paddingY: 2 }}>{children}</Container>
    </>
  )
}

export default Layout
