import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

const STEPS = [
  { label: '계정 정보', content: <Stack spacing={2}><TextField label="이름" size="small" /><TextField label="이메일" size="small" /></Stack> },
  { label: '배송 주소', content: <Stack spacing={2}><TextField label="주소" size="small" /><TextField label="상세 주소" size="small" /></Stack> },
  { label: '결제 수단', content: <Stack spacing={2}><TextField label="카드 번호" size="small" /><TextField label="유효 기간" size="small" /></Stack> },
  { label: '주문 확인', content: <Typography>입력하신 정보를 확인하고 주문을 완료하세요.</Typography> },
]

export default function StepperPage() {
  const [active, setActive] = useState(0)

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Stepper</Typography>
      <Typography color="text.secondary" mb={3}>
        단계별 프로세스를 시각화. 수평·수직 방향, 선택 가능 상태를 지원합니다.
      </Typography>

      <Stepper activeStep={active} orientation="vertical">
        {STEPS.map((step, i) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Box mb={2}>{step.content}</Box>
              <Stack direction="row" spacing={1}>
                <Button variant="contained" size="small" onClick={() => setActive(i + 1)}>
                  {i === STEPS.length - 1 ? '완료' : '다음'}
                </Button>
                {i > 0 && <Button size="small" onClick={() => setActive(i - 1)}>이전</Button>}
              </Stack>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {active === STEPS.length && (
        <Paper elevation={0} sx={{ p: 3, mt: 2, bgcolor: 'success.50', border: '1px solid', borderColor: 'success.main' }}>
          <Typography color="success.main" fontWeight={600}>주문이 완료되었습니다!</Typography>
          <Button size="small" onClick={() => setActive(0)} sx={{ mt: 1 }}>처음으로</Button>
        </Paper>
      )}
    </Box>
  )
}
