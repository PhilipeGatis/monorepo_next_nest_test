import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { ProductListGroupedByDescriptionResponseDto } from '@hubla/api/dist/models/product/dto/ProductListGroupedByDescriptionResponse.dto'
import CollapsibleRow from '../molecules/CollapsibleRow'

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
          {data.map(row => (
            <CollapsibleRow key={row.title} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataGrid
