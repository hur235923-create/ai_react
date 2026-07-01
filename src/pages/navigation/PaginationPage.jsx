import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'

const ITEMS_PER_PAGE = 5
const ALL_ITEMS = Array.from({ length: 47 }, (_, i) => ({
  id: i + 1,
  title: `항목 ${i + 1}`,
  desc: `이것은 ${i + 1}번째 데이터입니다.`,
}))

export default function PaginationPage() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(ALL_ITEMS.length / ITEMS_PER_PAGE)
  const items = ALL_ITEMS.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Pagination</Typography>
      <Typography color="text.secondary" mb={3}>
        페이지 단위로 데이터를 나눠서 탐색합니다.
      </Typography>

      <Typography variant="h6" gutterBottom>기본</Typography>
      <Stack spacing={2} mb={4}>
        <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} variant="outlined" />
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" gutterBottom>
        데이터 페이지네이션 ({ALL_ITEMS.length}개 항목)
      </Typography>
      <Stack spacing={1} mb={3}>
        {items.map((item) => (
          <Paper key={item.id} sx={{ p: 2 }}>
            <Typography fontWeight={600}>{item.title}</Typography>
            <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
          </Paper>
        ))}
      </Stack>
      <Pagination
        count={totalPages}
        page={page}
        onChange={(_, v) => setPage(v)}
        color="primary"
      />
      <Typography variant="caption" color="text.secondary" mt={1} display="block">
        {page} / {totalPages} 페이지
      </Typography>
    </Box>
  )
}
