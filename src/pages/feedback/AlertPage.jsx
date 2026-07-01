import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'

export default function AlertPage() {
  const [visible, setVisible] = useState(true)

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Alert</Typography>
      <Typography color="text.secondary" mb={3}>
        정보·성공·경고·오류 메시지를 인라인으로 표시하는 컴포넌트입니다.
      </Typography>

      <Typography variant="h6" gutterBottom>심각도(Severity)</Typography>
      <Stack spacing={2} mb={4}>
        <Alert severity="info">일반 안내 메시지입니다.</Alert>
        <Alert severity="success">작업이 성공적으로 완료되었습니다.</Alert>
        <Alert severity="warning">주의가 필요한 상황입니다.</Alert>
        <Alert severity="error">오류가 발생했습니다.</Alert>
      </Stack>

      <Typography variant="h6" gutterBottom>제목 포함</Typography>
      <Stack spacing={2} mb={4}>
        <Alert severity="info">
          <AlertTitle>안내</AlertTitle>
          시스템 점검이 오늘 밤 12시에 예정되어 있습니다.
        </Alert>
        <Alert severity="error">
          <AlertTitle>오류</AlertTitle>
          서버 연결에 실패했습니다. 잠시 후 다시 시도해주세요.
        </Alert>
      </Stack>

      <Typography variant="h6" gutterBottom>닫기 버튼</Typography>
      <Stack spacing={2}>
        {!visible && (
          <Button variant="outlined" size="small" onClick={() => setVisible(true)}>
            Alert 다시 표시
          </Button>
        )}
        <Collapse in={visible}>
          <Alert severity="warning" onClose={() => setVisible(false)}>
            이 Alert는 닫을 수 있습니다.
          </Alert>
        </Collapse>
      </Stack>
    </Box>
  )
}
