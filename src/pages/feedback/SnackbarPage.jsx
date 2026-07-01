import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

export default function SnackbarPage() {
  const [open, setOpen]     = useState(false)
  const [config, setConfig] = useState({ message: '', severity: 'info' })

  const show = (message, severity) => {
    setConfig({ message, severity })
    setOpen(true)
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Snackbar</Typography>
      <Typography color="text.secondary" mb={3}>
        화면 하단에 잠깐 나타나는 알림. 자동으로 사라집니다.
      </Typography>

      <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
        <Button variant="contained" color="success" onClick={() => show('저장되었습니다!', 'success')}>성공</Button>
        <Button variant="contained" color="error"   onClick={() => show('오류가 발생했습니다.', 'error')}>오류</Button>
        <Button variant="contained" color="warning" onClick={() => show('경고: 변경사항이 있습니다.', 'warning')}>경고</Button>
        <Button variant="contained" color="info"    onClick={() => show('새 업데이트가 있습니다.', 'info')}>정보</Button>
      </Stack>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={config.severity} onClose={() => setOpen(false)} sx={{ width: '100%' }}>
          {config.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}
