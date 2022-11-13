import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { ProductListGroupedByDescriptionResponseDto } from '@hubla/api/dist/models/product/dto/ProductListGroupedByDescriptionResponse.dto'
import CollapsibleRow from '../molecules/CollapsibleRow'
import UploadButton from '../molecules/UploadButton'

const DataGrid: React.FC<{ data: ProductListGroupedByDescriptionResponseDto[] }> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Produto</TableCell>
            <TableCell align="right">total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!!data.length ? (
            data.map(row => <CollapsibleRow key={row.title} row={row} />)
          ) : (
            <TableRow sx={{ height: '400px' }}>
              <TableCell colSpan={3} align="center">
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6">Lista vazia</Typography>
                  <Typography variant="caption">Faça o upload de uma lista de produtos.</Typography>
                </Box>
                <div>
                  <UploadButton />
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataGrid
