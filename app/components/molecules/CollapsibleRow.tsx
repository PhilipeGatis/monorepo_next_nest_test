import React, { useState } from 'react'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Collapse from '@mui/material/Collapse'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import { parseJSON, format } from 'date-fns'
import { ProductListGroupedByDescriptionResponseDto } from '@hubla/api/dist/models/product/dto/ProductListGroupedByDescriptionResponse.dto'
import { ProductResponseDto } from '@hubla/api/dist/models/product/dto/ProductResponse.dto'

const calcTotal = (list: ProductResponseDto[]): string => {
  let sum = 0
  for (const product of list) {
    if (product.type.signal) {
      sum = sum + product.value
    } else {
      sum = sum - product.value
    }
  }
  return sum.toLocaleString('pt-BR', {
    style: 'currency',
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
    currency: 'BRL',
  })
}

const CollapsibleRow: React.FC<{ row: ProductListGroupedByDescriptionResponseDto }> = ({ row }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell align="right">{calcTotal(row.list)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Vendedor</TableCell>
                    <TableCell>Descrição</TableCell>
                    <TableCell>Natureza</TableCell>
                    <TableCell>data</TableCell>
                    <TableCell align="right">Valor</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.list.map(product => {
                    const isPositive = product.type.signal
                    return (
                      <TableRow key={product.id}>
                        <TableCell component="th" scope="row" sx={{ color: isPositive ? 'green' : 'red' }}>
                          {product.seller}
                        </TableCell>
                        <TableCell component="th" scope="row" sx={{ color: isPositive ? 'green' : 'red' }}>
                          {product.type.descriptions}
                        </TableCell>
                        <TableCell component="th" scope="row" sx={{ color: isPositive ? 'green' : 'red' }}>
                          {product.type.nature}
                        </TableCell>
                        <TableCell sx={{ color: isPositive ? 'green' : 'red' }}>
                          {format(parseJSON(product.date), 'Pp')}
                        </TableCell>
                        <TableCell align="right" sx={{ color: isPositive ? 'green' : 'red' }}>
                          {(product.value * (isPositive ? 1 : -1)).toLocaleString('pt-BR', {
                            style: 'currency',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 3,
                            currency: 'BRL',
                          })}
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default CollapsibleRow
