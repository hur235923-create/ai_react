import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

export default function ButtonPage() {
  const [clicked, setClicked] = useState('')
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Button</Typography>
      <Typography color="text.secondary" mb={3}>
        variant(contained·outlined·text), color, size, disabled 속성을 지원합니다.
      </Typography>

      <Typography variant="h6" gutterBottom>Variants</Typography>
      <Stack direction="row" spacing={2} mb={3}>
        <Button variant="contained" onClick={() => setClicked('contained')}>Contained</Button>
        <Button variant="outlined" onClick={() => setClicked('outlined')}>Outlined</Button>
        <Button variant="text" onClick={() => setClicked('text')}>Text</Button>
      </Stack>

      <Typography variant="h6" gutterBottom>Colors</Typography>
      <Stack direction="row" spacing={2} mb={3}>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="success">Success</Button>
      </Stack>

      <Typography variant="h6" gutterBottom>Sizes</Typography>
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }} mb={3}>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
      </Stack>

      <Typography variant="h6" gutterBottom>Disabled</Typography>
      <Stack direction="row" spacing={2} mb={3}>
        <Button variant="contained" disabled>Disabled</Button>
        <Button variant="outlined" disabled>Disabled</Button>
      </Stack>

      {clicked && (
        <Typography mt={2} color="primary">
          마지막 클릭: <strong>{clicked}</strong>
        </Typography>
      )}
    </Box>
  )
}
