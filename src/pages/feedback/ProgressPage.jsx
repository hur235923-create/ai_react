import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress from '@mui/material/LinearProgress'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function ProgressPage() {
  const [progress, setProgress] = useState(0)
  const [running,  setRunning]  = useState(false)

  useEffect(() => {
    if (!running) return
    if (progress >= 100) { setRunning(false); return }
    const timer = setTimeout(() => setProgress(p => Math.min(p + 5, 100)), 200)
    return () => clearTimeout(timer)
  }, [running, progress])

  const startProgress = () => { setProgress(0); setRunning(true) }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Progress</Typography>
      <Typography color="text.secondary" mb={3}>
        작업 진행 상태를 시각적으로 표시합니다. 결정적(값 지정) / 비결정적(무한 루프) 두 가지.
      </Typography>

      <Typography variant="h6" gutterBottom>CircularProgress</Typography>
      <Stack direction="row" spacing={4} sx={{ alignItems: 'center' }} mb={4}>
        <Box textAlign="center">
          <CircularProgress />
          <Typography variant="caption" display="block" mt={1}>비결정적</Typography>
        </Box>
        <Box textAlign="center">
          <CircularProgress variant="determinate" value={75} />
          <Typography variant="caption" display="block" mt={1}>75%</Typography>
        </Box>
        <Box textAlign="center">
          <CircularProgress color="secondary" />
          <Typography variant="caption" display="block" mt={1}>Secondary</Typography>
        </Box>
        <Box textAlign="center">
          <CircularProgress color="success" size={60} />
          <Typography variant="caption" display="block" mt={1}>Large</Typography>
        </Box>
      </Stack>

      <Typography variant="h6" gutterBottom>LinearProgress</Typography>
      <Stack spacing={2} mb={4}>
        <LinearProgress />
        <LinearProgress color="secondary" />
        <LinearProgress variant="determinate" value={60} />
        <LinearProgress variant="buffer" value={70} valueBuffer={85} />
      </Stack>

      <Typography variant="h6" gutterBottom>인터랙티브 진행바</Typography>
      <Stack spacing={2} maxWidth={400}>
        <Button variant="contained" onClick={startProgress} disabled={running}>
          {running ? '진행 중…' : '업로드 시작'}
        </Button>
        <LinearProgress variant="determinate" value={progress} />
        <Typography variant="body2" color="text.secondary">{progress}%</Typography>
      </Stack>
    </Box>
  )
}
