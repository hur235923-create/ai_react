import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'

export default function SelectPage() {
  const [fruit, setFruit] = useState('')
  const [size, setSize]   = useState('medium')
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Select</Typography>
      <Typography color="text.secondary" mb={3}>
        드롭다운 선택 컴포넌트. FormControl + InputLabel과 함께 사용합니다.
      </Typography>

      <Typography variant="h6" gutterBottom>기본 Select</Typography>
      <FormControl sx={{ minWidth: 200, mb: 3 }}>
        <InputLabel>과일</InputLabel>
        <Select value={fruit} label="과일" onChange={(e) => setFruit(e.target.value)}>
          <MenuItem value="apple">사과</MenuItem>
          <MenuItem value="banana">바나나</MenuItem>
          <MenuItem value="orange">오렌지</MenuItem>
          <MenuItem value="grape">포도</MenuItem>
        </Select>
      </FormControl>
      {fruit && <Typography mb={3}>선택: <strong>{fruit}</strong></Typography>}

      <Typography variant="h6" gutterBottom>Variant 비교</Typography>
      <Stack direction="row" spacing={2}>
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Outlined</InputLabel>
          <Select value={size} label="Outlined" onChange={(e) => setSize(e.target.value)}>
            <MenuItem value="small">Small</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">Large</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 150 }} variant="filled">
          <InputLabel>Filled</InputLabel>
          <Select value={size} label="Filled" onChange={(e) => setSize(e.target.value)}>
            <MenuItem value="small">Small</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">Large</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  )
}
