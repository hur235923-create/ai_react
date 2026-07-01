import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import HomeIcon from '@mui/icons-material/Home'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const TREE = {
  home:     { label: '홈',     children: ['쇼핑', '블로그', '고객센터'] },
  쇼핑:    { label: '쇼핑',   children: ['전자기기', '패션', '식품'] },
  전자기기: { label: '전자기기', children: ['스마트폰', '노트북', '태블릿'] },
}

export default function BreadcrumbsPage() {
  const [path, setPath] = useState(['home'])

  const navigate = (to) => {
    const idx = path.indexOf(to)
    if (idx !== -1) { setPath(path.slice(0, idx + 1)); return }
    setPath([...path, to])
  }

  const current = TREE[path[path.length - 1]]

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Breadcrumbs</Typography>
      <Typography color="text.secondary" mb={3}>
        현재 위치를 계층 구조로 표시합니다. 뒤로가기 내비게이션에 유용합니다.
      </Typography>

      <Typography variant="h6" gutterBottom>기본</Typography>
      <Stack spacing={2} mb={4}>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="#">홈</Link>
          <Link underline="hover" color="inherit" href="#">쇼핑</Link>
          <Link underline="hover" color="inherit" href="#">전자기기</Link>
          <Typography color="text.primary">스마트폰</Typography>
        </Breadcrumbs>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="#" sx={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon sx={{ mr: 0.5, fontSize: 16 }} />홈
          </Link>
          <Link underline="hover" color="inherit" href="#">카테고리</Link>
          <Typography color="text.primary">현재 페이지</Typography>
        </Breadcrumbs>
      </Stack>

      <Typography variant="h6" gutterBottom>인터랙티브 탐색</Typography>
      <Breadcrumbs sx={{ mb: 2 }}>
        {path.map((key, i) => {
          const label = TREE[key]?.label ?? key
          return i < path.length - 1
            ? <Link key={key} underline="hover" color="inherit" onClick={() => setPath(path.slice(0, i + 1))} sx={{ cursor: 'pointer' }}>{label}</Link>
            : <Typography key={key} color="text.primary">{label}</Typography>
        })}
      </Breadcrumbs>
      {current?.children && (
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
          {current.children.map(child => (
            <Chip key={child} label={child} clickable onClick={() => navigate(child)} />
          ))}
        </Stack>
      )}
    </Box>
  )
}
