import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { NAV_GROUPS } from '../../routes'

export default function Header() {
  const navigate = useNavigate()
  const [anchors, setAnchors] = useState({})

  const openMenu  = (label, e) => setAnchors(prev => ({ ...prev, [label]: e.currentTarget }))
  const closeMenu = (label)    => setAnchors(prev => ({ ...prev, [label]: null }))

  const handleNavigate = (label, path) => {
    closeMenu(label)
    navigate(path)
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 700 }}
          onClick={() => navigate('/')}
        >
          MUI Showcase
        </Typography>

        {NAV_GROUPS.map(({ label, items }) => (
          <span key={label}>
            <Button color="inherit" onClick={(e) => openMenu(label, e)}>
              {label} ▾
            </Button>
            <Menu
              anchorEl={anchors[label]}
              open={Boolean(anchors[label])}
              onClose={() => closeMenu(label)}
            >
              {items.map((item) => (
                <MenuItem key={item.path} onClick={() => handleNavigate(label, item.path)}>
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </span>
        ))}
      </Toolbar>
    </AppBar>
  )
}
