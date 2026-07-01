import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Paper from '@mui/material/Paper'

const ROWS = [
  { name: '김민준', age: 28, city: '서울', score: 92 },
  { name: '이서연', age: 34, city: '부산', score: 78 },
  { name: '박도현', age: 22, city: '대전', score: 85 },
  { name: '최지우', age: 31, city: '인천', score: 91 },
  { name: '정하은', age: 26, city: '광주', score: 67 },
]

export default function TablePage() {
  const [orderBy, setOrderBy] = useState('name')
  const [order, setOrder]     = useState('asc')

  const handleSort = (col) => {
    setOrder(orderBy === col && order === 'asc' ? 'desc' : 'asc')
    setOrderBy(col)
  }

  const sorted = [...ROWS].sort((a, b) => {
    const v = a[orderBy] < b[orderBy] ? -1 : a[orderBy] > b[orderBy] ? 1 : 0
    return order === 'asc' ? v : -v
  })

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Table</Typography>
      <Typography color="text.secondary" mb={3}>
        데이터 테이블. 헤더 클릭으로 정렬할 수 있습니다.
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ '& th': { fontWeight: 700, bgcolor: 'grey.100' } }}>
              {['name', 'age', 'city', 'score'].map((col) => (
                <TableCell key={col}>
                  <TableSortLabel
                    active={orderBy === col}
                    direction={orderBy === col ? order : 'asc'}
                    onClick={() => handleSort(col)}
                  >
                    {{ name: '이름', age: '나이', city: '도시', score: '점수' }[col]}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sorted.map((row) => (
              <TableRow key={row.name} hover>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
