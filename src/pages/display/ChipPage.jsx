import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import FaceIcon from '@mui/icons-material/Face'

const TAGS = ['React', 'TypeScript', 'Node.js', 'Python', 'GraphQL', 'Docker']

export default function ChipPage() {
  const [selected, setSelected] = useState([])

  const toggle = (tag) =>
    setSelected(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    )

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Chip</Typography>
      <Typography color="text.secondary" mb={3}>
        태그, 필터, 선택 상태 등에 사용하는 작은 레이블 컴포넌트입니다.
      </Typography>

      <Typography variant="h6" gutterBottom>Variants</Typography>
      <Stack direction="row" spacing={1} mb={3} sx={{ flexWrap: 'wrap' }}>
        <Chip label="Filled (기본)" />
        <Chip label="Outlined" variant="outlined" />
        <Chip label="Clickable" onClick={() => {}} />
        <Chip label="Deletable" onDelete={() => {}} />
      </Stack>

      <Typography variant="h6" gutterBottom>Colors</Typography>
      <Stack direction="row" spacing={1} mb={3} sx={{ flexWrap: 'wrap' }}>
        <Chip label="Primary"   color="primary" />
        <Chip label="Secondary" color="secondary" />
        <Chip label="Error"     color="error" />
        <Chip label="Warning"   color="warning" />
        <Chip label="Success"   color="success" />
      </Stack>

      <Typography variant="h6" gutterBottom>아바타 & 아이콘</Typography>
      <Stack direction="row" spacing={1} mb={4} sx={{ flexWrap: 'wrap' }}>
        <Chip avatar={<Avatar>K</Avatar>} label="김민준" />
        <Chip icon={<FaceIcon />} label="아이콘 칩" color="primary" />
      </Stack>

      <Typography variant="h6" gutterBottom>기술 스택 필터 (클릭하여 선택)</Typography>
      <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
        {TAGS.map(tag => (
          <Chip
            key={tag}
            label={tag}
            clickable
            color={selected.includes(tag) ? 'primary' : 'default'}
            variant={selected.includes(tag) ? 'filled' : 'outlined'}
            onClick={() => toggle(tag)}
          />
        ))}
      </Stack>
      {selected.length > 0 && (
        <Typography mt={2} color="text.secondary">
          선택됨: {selected.join(', ')}
        </Typography>
      )}
    </Box>
  )
}
