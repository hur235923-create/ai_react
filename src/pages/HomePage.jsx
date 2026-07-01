import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function HomePage() {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h3" gutterBottom fontWeight={700}>
        MUI Component Showcase
      </Typography>
      <Typography variant="body1" color="text.secondary">
        위 헤더 메뉴에서 컴포넌트를 선택하세요.
      </Typography>
    </Box>
  )
}
