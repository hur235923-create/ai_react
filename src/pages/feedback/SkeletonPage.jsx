import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'

function SkeletonCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <Skeleton variant="rectangular" height={160} />
      <CardContent>
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }} mb={1}>
          <Skeleton variant="circular" width={40} height={40} />
          <Box flex={1}>
            <Skeleton width="80%" />
            <Skeleton width="60%" />
          </Box>
        </Stack>
        <Skeleton />
        <Skeleton width="80%" />
      </CardContent>
    </Card>
  )
}

function RealCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <Box sx={{ height: 160, bgcolor: 'primary.light', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography color="white" variant="h6">이미지</Typography>
      </Box>
      <CardContent>
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }} mb={1}>
          <Avatar sx={{ bgcolor: 'secondary.main' }}>K</Avatar>
          <Box>
            <Typography variant="subtitle2">김민준</Typography>
            <Typography variant="caption" color="text.secondary">5분 전</Typography>
          </Box>
        </Stack>
        <Typography variant="body2">로딩이 완료된 실제 콘텐츠입니다.</Typography>
        <Typography variant="body2" color="text.secondary">두 번째 줄 내용입니다.</Typography>
      </CardContent>
    </Card>
  )
}

export default function SkeletonPage() {
  const [loaded, setLoaded] = useState(false)
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Skeleton</Typography>
      <Typography color="text.secondary" mb={3}>
        콘텐츠 로딩 중 자리를 차지하는 플레이스홀더. 깜빡임 없는 UX를 제공합니다.
      </Typography>

      <FormControlLabel
        control={<Switch checked={loaded} onChange={(e) => setLoaded(e.target.checked)} />}
        label={loaded ? '로딩 완료' : '로딩 중…'}
        sx={{ mb: 3 }}
      />

      {loaded ? <RealCard /> : <SkeletonCard />}
    </Box>
  )
}
