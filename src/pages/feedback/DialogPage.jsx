import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

export default function DialogPage() {
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [formOpen,    setFormOpen]    = useState(false)
  const [result,      setResult]      = useState('')

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Dialog</Typography>
      <Typography color="text.secondary" mb={3}>
        사용자의 확인 또는 추가 입력이 필요할 때 사용하는 모달 창입니다.
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={() => setConfirmOpen(true)}>확인 Dialog</Button>
        <Button variant="outlined" onClick={() => setFormOpen(true)}>폼 Dialog</Button>
      </Stack>

      {result && <Typography mt={2} color="primary">결과: {result}</Typography>}

      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>정말 삭제하시겠습니까?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            이 작업은 되돌릴 수 없습니다. 선택한 항목이 영구적으로 삭제됩니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setConfirmOpen(false); setResult('취소함') }}>취소</Button>
          <Button color="error" variant="contained" onClick={() => { setConfirmOpen(false); setResult('삭제 확인') }}>
            삭제
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={formOpen} onClose={() => setFormOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>프로필 수정</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField label="이름"  defaultValue="김민준" fullWidth />
            <TextField label="이메일" defaultValue="kim@example.com" fullWidth />
            <TextField label="소개"  multiline rows={3} fullWidth />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setFormOpen(false)}>취소</Button>
          <Button variant="contained" onClick={() => { setFormOpen(false); setResult('저장됨') }}>저장</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
