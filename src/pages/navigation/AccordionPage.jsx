import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const FAQS = [
  { q: 'MUI는 무료인가요?',            a: '네, MUI Core는 MIT 라이선스로 무료입니다. MUI X의 일부 고급 컴포넌트는 유료입니다.' },
  { q: 'TypeScript를 지원하나요?',      a: '네, MUI는 TypeScript로 작성되어 완전한 타입 지원을 제공합니다.' },
  { q: '테마를 커스터마이징할 수 있나요?', a: 'createTheme()으로 색상, 타이포그래피, 간격 등 모든 디자인 토큰을 변경할 수 있습니다.' },
  { q: 'Next.js와 함께 사용할 수 있나요?', a: '네, @mui/material-nextjs 패키지로 SSR을 지원합니다.' },
  { q: '아이콘은 어떻게 사용하나요?',    a: '@mui/icons-material 패키지를 설치 후 import하면 2,000개 이상의 아이콘을 사용할 수 있습니다.' },
]

export default function AccordionPage() {
  const [expanded, setExpanded] = useState(false)

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Accordion</Typography>
      <Typography color="text.secondary" mb={3}>
        접었다 펼 수 있는 패널. FAQ, 설정 섹션에 자주 사용됩니다.
      </Typography>

      <Typography variant="h6" gutterBottom>FAQ</Typography>
      {FAQS.map((faq, i) => (
        <Accordion
          key={i}
          expanded={expanded === i}
          onChange={() => setExpanded(expanded === i ? false : i)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>{faq.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">{faq.a}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}
