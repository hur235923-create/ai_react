import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

export default function TextFieldPage() {
  const [value, setValue] = useState('')
  return (
    <Box>
      <Typography variant="h4" gutterBottom>TextField</Typography>
      <Typography color="text.secondary" mb={3}>
        텍스트 입력 필드. variant, label, helper text, error 상태를 지원합니다.
      </Typography>

      <Typography variant="h6" gutterBottom>Variants</Typography>
      <Stack spacing={2} maxWidth={400} mb={3}>
        <TextField label="Outlined (기본)" variant="outlined" />
        <TextField label="Filled" variant="filled" />
        <TextField label="Standard" variant="standard" />
      </Stack>

      <Typography variant="h6" gutterBottom>상태</Typography>
      <Stack spacing={2} maxWidth={400} mb={3}>
        <TextField label="Helper Text" helperText="입력 안내 메시지" />
        <TextField label="Error" error helperText="오류 메시지" />
        <TextField label="Disabled" disabled />
        <TextField label="Password" type="password" />
      </Stack>

      <Typography variant="h6" gutterBottom>실시간 입력</Typography>
      <Stack spacing={1} maxWidth={400}>
        <TextField
          label="입력해보세요"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Typography variant="body2" color="text.secondary">
          입력값: {value || '(없음)'}
        </Typography>
      </Stack>
    </Box>
  )
}
