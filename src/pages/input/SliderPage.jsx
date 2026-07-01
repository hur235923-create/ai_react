import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'

export default function SliderPage() {
  const [volume, setVolume]    = useState(30)
  const [range, setRange]      = useState([20, 70])
  const [temperature, setTemp] = useState(22)

  return (
    <Box maxWidth={500}>
      <Typography variant="h4" gutterBottom>Slider</Typography>
      <Typography color="text.secondary" mb={3}>
        숫자 범위 선택. 단일값, 범위, 마크 포인트 등을 지원합니다.
      </Typography>

      <Typography variant="h6" gutterBottom>볼륨 ({volume})</Typography>
      <Slider value={volume} onChange={(_, v) => setVolume(v)} sx={{ mb: 4 }} />

      <Typography variant="h6" gutterBottom>
        가격 범위 ({range[0]}만원 ~ {range[1]}만원)
      </Typography>
      <Slider
        value={range}
        onChange={(_, v) => setRange(v)}
        valueLabelDisplay="auto"
        sx={{ mb: 4 }}
      />

      <Typography variant="h6" gutterBottom>온도 ({temperature}°C)</Typography>
      <Slider
        value={temperature}
        onChange={(_, v) => setTemp(v)}
        min={-10}
        max={40}
        marks={[
          { value: -10, label: '-10°C' },
          { value: 0,   label: '0°C' },
          { value: 20,  label: '20°C' },
          { value: 40,  label: '40°C' },
        ]}
        valueLabelDisplay="auto"
        color="error"
        sx={{ mb: 4 }}
      />

      <Typography variant="h6" gutterBottom>Disabled</Typography>
      <Slider value={50} disabled />
    </Box>
  )
}
