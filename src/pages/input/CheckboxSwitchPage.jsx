import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Stack from '@mui/material/Stack'

export default function CheckboxSwitchPage() {
  const [checks, setChecks] = useState({ apple: true, banana: false, orange: false })
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)

  const handleCheck = (name) =>
    setChecks(prev => ({ ...prev, [name]: !prev[name] }))

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Checkbox & Switch</Typography>
      <Typography color="text.secondary" mb={3}>
        Checkbox는 다중 선택, Switch는 단일 토글에 적합합니다.
      </Typography>

      <Typography variant="h6" gutterBottom>Checkbox</Typography>
      <FormGroup row sx={{ mb: 3 }}>
        {Object.entries(checks).map(([name, checked]) => (
          <FormControlLabel
            key={name}
            control={<Checkbox checked={checked} onChange={() => handleCheck(name)} />}
            label={name}
          />
        ))}
      </FormGroup>
      <Typography mb={3} color="text.secondary">
        선택됨: {Object.entries(checks).filter(([, v]) => v).map(([k]) => k).join(', ') || '없음'}
      </Typography>

      <Typography variant="h6" gutterBottom>Colors</Typography>
      <Stack direction="row" mb={3}>
        <FormControlLabel control={<Checkbox defaultChecked color="primary" />} label="Primary" />
        <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Secondary" />
        <FormControlLabel control={<Checkbox defaultChecked color="error" />} label="Error" />
        <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="Success" />
      </Stack>

      <Typography variant="h6" gutterBottom>Switch</Typography>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />}
          label={`다크 모드: ${darkMode ? 'ON' : 'OFF'}`}
        />
        <FormControlLabel
          control={<Switch checked={notifications} onChange={(e) => setNotifications(e.target.checked)} color="success" />}
          label={`알림: ${notifications ? 'ON' : 'OFF'}`}
        />
        <FormControlLabel control={<Switch disabled />} label="Disabled" />
      </FormGroup>
    </Box>
  )
}
