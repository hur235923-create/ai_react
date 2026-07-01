import { Routes, Route } from 'react-router-dom'
import Box from '@mui/material/Box'
import Header from './components/layout/Header'
import HomePage from './pages/HomePage'
import { NAV_GROUPS } from './routes'

export default function App() {
  return (
    <>
      <Header />
      <Box component="main" sx={{ mt: '64px', p: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {NAV_GROUPS.flatMap(({ items }) =>
            items.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))
          )}
        </Routes>
      </Box>
    </>
  )
}
