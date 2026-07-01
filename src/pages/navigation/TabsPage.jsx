import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

const PANELS = [
  { label: '소개',   content: 'MUI는 구글의 Material Design을 기반으로 한 React UI 라이브러리입니다.' },
  { label: '설치',   content: 'npm install @mui/material @emotion/react @emotion/styled' },
  { label: '사용법', content: 'import Button from "@mui/material/Button" 으로 개별 컴포넌트를 불러옵니다.' },
  { label: '테마',   content: 'ThemeProvider + createTheme으로 전역 색상, 폰트, 간격을 커스터마이징합니다.' },
]

export default function TabsPage() {
  const [tab, setTab] = useState(0)

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Tabs</Typography>
      <Typography color="text.secondary" mb={3}>
        콘텐츠를 탭으로 구분해 표시합니다. 수평·수직 방향을 지원합니다.
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
        <Tabs value={tab} onChange={(_, v) => setTab(v)}>
          {PANELS.map((p) => <Tab key={p.label} label={p.label} />)}
        </Tabs>
      </Box>
      <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 1, minHeight: 80 }}>
        <Typography>{PANELS[tab].content}</Typography>
      </Box>

      <Typography variant="h6" gutterBottom mt={4}>스크롤 Tabs</Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={0} variant="scrollable" scrollButtons="auto">
          {['Button', 'TextField', 'Select', 'Checkbox', 'Slider', 'Table', 'List', 'Card', 'Chip', 'Avatar'].map(label => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>
      </Box>
    </Box>
  )
}
