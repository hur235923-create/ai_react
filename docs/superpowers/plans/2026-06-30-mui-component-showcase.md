# MUI Component Showcase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** React Router 기반 SPA에 MUI 컴포넌트 20개를 각 독립 페이지로 구현하고, 카테고리별 드롭다운 헤더 네비게이션으로 이동하는 쇼케이스 앱을 만든다.

**Architecture:** App.jsx가 BrowserRouter + 고정 Header + `<Outlet>` 메인 영역으로 구성된다. Header는 MUI AppBar 위에 카테고리 4개(입력·표시·피드백·탐색)의 드롭다운 메뉴를 노출하며, 각 항목 클릭 시 `/components/:name` 경로로 이동한다. 20개 페이지 컴포넌트는 카테고리별 폴더로 분리한다.

**Tech Stack:** React 18, React Router v6, MUI v5 (@mui/material + @emotion), Vite

---

## File Map

```
react-app/src/
  App.jsx                          ← 수정: Router + Layout
  main.jsx                         ← 수정: React 18 strict mode 유지
  components/
    layout/
      Header.jsx                   ← 신규: AppBar + 드롭다운 메뉴
  pages/
    HomePage.jsx                   ← 신규: 루트 "/" 랜딩
    input/
      ButtonPage.jsx
      TextFieldPage.jsx
      SelectPage.jsx
      CheckboxSwitchPage.jsx
      SliderPage.jsx
    display/
      TablePage.jsx
      ListPage.jsx
      CardPage.jsx
      ChipPage.jsx
      AvatarPage.jsx
    feedback/
      SnackbarPage.jsx
      DialogPage.jsx
      AlertPage.jsx
      ProgressPage.jsx
      SkeletonPage.jsx
    navigation/
      TabsPage.jsx
      StepperPage.jsx
      BreadcrumbsPage.jsx
      AccordionPage.jsx
      PaginationPage.jsx
  routes.jsx                       ← 신규: 라우트 + 메뉴 정의 (단일 진실 소스)
```

---

## 실행 순서 주의

> routes.jsx는 20개 페이지를 모두 import하므로 **페이지 파일이 모두 생성된 뒤** 마지막에 만든다.  
> 올바른 실행 순서: Task 1(패키지) → Task 5(입력) → Task 6(표시) → Task 7(피드백) → Task 8(탐색) → Task 2(routes.jsx) → Task 3(Header) → Task 4(App) → Task 9(검증)

---

## Task 1: react-router-dom 설치

**Files:**
- Modify: `package.json` (npm이 자동 수정)

- [ ] **Step 1: 패키지 설치**

```bash
cd react-app
npm install react-router-dom
```

Expected: `added X packages` 메시지, 오류 없음

- [ ] **Step 2: 설치 확인**

```bash
npm ls react-router-dom
```

Expected: `react-router-dom@6.x.x` 출력

---

## Task 2: routes.jsx — 라우트 & 메뉴 정의

**Files:**
- Create: `src/routes.jsx`

이 파일이 **메뉴 구조와 라우트의 단일 진실 소스**다. Header와 App 모두 여기서 import한다.

- [ ] **Step 1: 파일 생성**

```jsx
// src/routes.jsx
import ButtonPage        from './pages/input/ButtonPage'
import TextFieldPage     from './pages/input/TextFieldPage'
import SelectPage        from './pages/input/SelectPage'
import CheckboxSwitchPage from './pages/input/CheckboxSwitchPage'
import SliderPage        from './pages/input/SliderPage'
import TablePage         from './pages/display/TablePage'
import ListPage          from './pages/display/ListPage'
import CardPage          from './pages/display/CardPage'
import ChipPage          from './pages/display/ChipPage'
import AvatarPage        from './pages/display/AvatarPage'
import SnackbarPage      from './pages/feedback/SnackbarPage'
import DialogPage        from './pages/feedback/DialogPage'
import AlertPage         from './pages/feedback/AlertPage'
import ProgressPage      from './pages/feedback/ProgressPage'
import SkeletonPage      from './pages/feedback/SkeletonPage'
import TabsPage          from './pages/navigation/TabsPage'
import StepperPage       from './pages/navigation/StepperPage'
import BreadcrumbsPage   from './pages/navigation/BreadcrumbsPage'
import AccordionPage     from './pages/navigation/AccordionPage'
import PaginationPage    from './pages/navigation/PaginationPage'

export const NAV_GROUPS = [
  {
    label: '입력',
    items: [
      { label: 'Button',           path: '/components/button',         element: <ButtonPage /> },
      { label: 'TextField',        path: '/components/textfield',      element: <TextFieldPage /> },
      { label: 'Select',           path: '/components/select',         element: <SelectPage /> },
      { label: 'Checkbox & Switch',path: '/components/checkbox-switch',element: <CheckboxSwitchPage /> },
      { label: 'Slider',           path: '/components/slider',         element: <SliderPage /> },
    ],
  },
  {
    label: '표시',
    items: [
      { label: 'Table',  path: '/components/table',  element: <TablePage /> },
      { label: 'List',   path: '/components/list',   element: <ListPage /> },
      { label: 'Card',   path: '/components/card',   element: <CardPage /> },
      { label: 'Chip',   path: '/components/chip',   element: <ChipPage /> },
      { label: 'Avatar', path: '/components/avatar', element: <AvatarPage /> },
    ],
  },
  {
    label: '피드백',
    items: [
      { label: 'Snackbar', path: '/components/snackbar', element: <SnackbarPage /> },
      { label: 'Dialog',   path: '/components/dialog',   element: <DialogPage /> },
      { label: 'Alert',    path: '/components/alert',    element: <AlertPage /> },
      { label: 'Progress', path: '/components/progress', element: <ProgressPage /> },
      { label: 'Skeleton', path: '/components/skeleton', element: <SkeletonPage /> },
    ],
  },
  {
    label: '탐색',
    items: [
      { label: 'Tabs',        path: '/components/tabs',        element: <TabsPage /> },
      { label: 'Stepper',     path: '/components/stepper',     element: <StepperPage /> },
      { label: 'Breadcrumbs', path: '/components/breadcrumbs', element: <BreadcrumbsPage /> },
      { label: 'Accordion',   path: '/components/accordion',   element: <AccordionPage /> },
      { label: 'Pagination',  path: '/components/pagination',  element: <PaginationPage /> },
    ],
  },
]
```

> **Note:** 이 시점에 페이지 파일들이 아직 없으므로 import 오류가 난다. Task 3~7에서 채운 뒤 Task 8에서 연결한다.

---

## Task 3: Header.jsx — AppBar + 드롭다운 메뉴

**Files:**
- Create: `src/components/layout/Header.jsx`

- [ ] **Step 1: 파일 생성**

```jsx
// src/components/layout/Header.jsx
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
  // 각 그룹마다 앵커 엘리먼트를 하나씩 관리
  const [anchors, setAnchors] = useState({})

  const openMenu = (label, event) =>
    setAnchors(prev => ({ ...prev, [label]: event.currentTarget }))

  const closeMenu = (label) =>
    setAnchors(prev => ({ ...prev, [label]: null }))

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
            <Button
              color="inherit"
              onClick={(e) => openMenu(label, e)}
            >
              {label} ▾
            </Button>
            <Menu
              anchorEl={anchors[label]}
              open={Boolean(anchors[label])}
              onClose={() => closeMenu(label)}
            >
              {items.map((item) => (
                <MenuItem
                  key={item.path}
                  onClick={() => handleNavigate(label, item.path)}
                >
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
```

---

## Task 4: App.jsx + main.jsx + HomePage 재작성

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/main.jsx`
- Create: `src/pages/HomePage.jsx`

- [ ] **Step 1: HomePage.jsx 생성**

```jsx
// src/pages/HomePage.jsx
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function HomePage() {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h3" gutterBottom fontWeight={700}>
        MUI Component Showcase
      </Typography>
      <Typography variant="body1" color="text.secondary">
        위 헤더 메뉴에서 컴포넌트를 선택하세요.
      </Typography>
    </Box>
  )
}
```

- [ ] **Step 2: App.jsx 재작성**

```jsx
// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Box from '@mui/material/Box'
import Header from './components/layout/Header'
import HomePage from './pages/HomePage'
import { NAV_GROUPS } from './routes'

export default function App() {
  return (
    <>
      <Header />
      {/* AppBar가 fixed이므로 콘텐츠를 헤더 높이만큼 내린다 */}
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
```

- [ ] **Step 3: main.jsx에 BrowserRouter 추가**

```jsx
// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

---

## Task 5: 입력 카테고리 페이지 5개

**Files:**
- Create: `src/pages/input/ButtonPage.jsx`
- Create: `src/pages/input/TextFieldPage.jsx`
- Create: `src/pages/input/SelectPage.jsx`
- Create: `src/pages/input/CheckboxSwitchPage.jsx`
- Create: `src/pages/input/SliderPage.jsx`

각 페이지는 **제목 + 설명 + 인터랙티브 예제** 구조를 따른다.

- [ ] **Step 1: ButtonPage.jsx**

```jsx
// src/pages/input/ButtonPage.jsx
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
      <Stack direction="row" spacing={2} alignItems="center" mb={3}>
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
```

- [ ] **Step 2: TextFieldPage.jsx**

```jsx
// src/pages/input/TextFieldPage.jsx
import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

export default function TextFieldPage() {
  const [value, setValue] = useState('')
  return (
    <Box>
      <Typography variant="h4" gutterBottom>TextField</Typography>
      <Typography color="text.secondary" mb={3}>
        텍스트 입력 필드. variant, label, helper text, error 상태를 지원합니다.
      </Typography>

      <Typography variant="h6" gutterBottom>Variants</Typography>
      <Stack spacing={2} maxWidth={400} mb={3}>
        <TextField label="Outlined (기본)" variant="outlined" />
        <TextField label="Filled" variant="filled" />
        <TextField label="Standard" variant="standard" />
      </Stack>

      <Typography variant="h6" gutterBottom>상태</Typography>
      <Stack spacing={2} maxWidth={400} mb={3}>
        <TextField label="Helper Text" helperText="입력 안내 메시지" />
        <TextField label="Error" error helperText="오류 메시지" />
        <TextField label="Disabled" disabled />
        <TextField label="Password" type="password" />
      </Stack>

      <Typography variant="h6" gutterBottom>실시간 입력</Typography>
      <Stack spacing={1} maxWidth={400}>
        <TextField
          label="입력해보세요"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Typography variant="body2" color="text.secondary">
          입력값: {value || '(없음)'}
        </Typography>
      </Stack>
    </Box>
  )
}
```

- [ ] **Step 3: SelectPage.jsx**

```jsx
// src/pages/input/SelectPage.jsx
import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'

export default function SelectPage() {
  const [fruit, setFruit] = useState('')
  const [size, setSize]   = useState('medium')
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Select</Typography>
      <Typography color="text.secondary" mb={3}>
        드롭다운 선택 컴포넌트. FormControl + InputLabel과 함께 사용합니다.
      </Typography>

      <Typography variant="h6" gutterBottom>기본 Select</Typography>
      <FormControl sx={{ minWidth: 200, mb: 3 }}>
        <InputLabel>과일</InputLabel>
        <Select value={fruit} label="과일" onChange={(e) => setFruit(e.target.value)}>
          <MenuItem value="apple">사과</MenuItem>
          <MenuItem value="banana">바나나</MenuItem>
          <MenuItem value="orange">오렌지</MenuItem>
          <MenuItem value="grape">포도</MenuItem>
        </Select>
      </FormControl>
      {fruit && <Typography mb={3}>선택: <strong>{fruit}</strong></Typography>}

      <Typography variant="h6" gutterBottom>Variant 비교</Typography>
      <Stack direction="row" spacing={2}>
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Outlined</InputLabel>
          <Select value={size} label="Outlined" onChange={(e) => setSize(e.target.value)}>
            <MenuItem value="small">Small</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">Large</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 150 }} variant="filled">
          <InputLabel>Filled</InputLabel>
          <Select value={size} label="Filled" onChange={(e) => setSize(e.target.value)}>
            <MenuItem value="small">Small</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">Large</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  )
}
```

- [ ] **Step 4: CheckboxSwitchPage.jsx**

```jsx
// src/pages/input/CheckboxSwitchPage.jsx
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
        선택됨: {Object.entries(checks).filter(([,v]) => v).map(([k]) => k).join(', ') || '없음'}
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
```

- [ ] **Step 5: SliderPage.jsx**

```jsx
// src/pages/input/SliderPage.jsx
import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'

export default function SliderPage() {
  const [volume, setVolume]     = useState(30)
  const [range, setRange]       = useState([20, 70])
  const [temperature, setTemp]  = useState(22)

  return (
    <Box maxWidth={500}>
      <Typography variant="h4" gutterBottom>Slider</Typography>
      <Typography color="text.secondary" mb={3}>
        숫자 범위 선택. 단일값, 범위, 마크 포인트 등을 지원합니다.
      </Typography>

      <Typography variant="h6" gutterBottom>볼륨 ({volume})</Typography>
      <Slider value={volume} onChange={(_, v) => setVolume(v)} sx={{ mb: 4 }} />

      <Typography variant="h6" gutterBottom>
        가격 범위 ({range[0]}만원 ~ {range[1]}만원)
      </Typography>
      <Slider
        value={range}
        onChange={(_, v) => setRange(v)}
        valueLabelDisplay="auto"
        sx={{ mb: 4 }}
      />

      <Typography variant="h6" gutterBottom>온도 ({temperature}°C)</Typography>
      <Slider
        value={temperature}
        onChange={(_, v) => setTemp(v)}
        min={-10}
        max={40}
        marks={[
          { value: -10, label: '-10°C' },
          { value: 0,   label: '0°C' },
          { value: 20,  label: '20°C' },
          { value: 40,  label: '40°C' },
        ]}
        valueLabelDisplay="auto"
        color="error"
        sx={{ mb: 4 }}
      />

      <Typography variant="h6" gutterBottom>Disabled</Typography>
      <Slider value={50} disabled />
    </Box>
  )
}
```

---

## Task 6: 표시 카테고리 페이지 5개

**Files:**
- Create: `src/pages/display/TablePage.jsx`
- Create: `src/pages/display/ListPage.jsx`
- Create: `src/pages/display/CardPage.jsx`
- Create: `src/pages/display/ChipPage.jsx`
- Create: `src/pages/display/AvatarPage.jsx`

- [ ] **Step 1: TablePage.jsx**

```jsx
// src/pages/display/TablePage.jsx
import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Paper from '@mui/material/Paper'

const ROWS = [
  { name: '김민준', age: 28, city: '서울',  score: 92 },
  { name: '이서연', age: 34, city: '부산',  score: 78 },
  { name: '박도현', age: 22, city: '대전',  score: 85 },
  { name: '최지우', age: 31, city: '인천',  score: 91 },
  { name: '정하은', age: 26, city: '광주',  score: 67 },
]

export default function TablePage() {
  const [orderBy, setOrderBy] = useState('name')
  const [order, setOrder]     = useState('asc')

  const handleSort = (col) => {
    setOrder(orderBy === col && order === 'asc' ? 'desc' : 'asc')
    setOrderBy(col)
  }

  const sorted = [...ROWS].sort((a, b) => {
    const v = a[orderBy] < b[orderBy] ? -1 : a[orderBy] > b[orderBy] ? 1 : 0
    return order === 'asc' ? v : -v
  })

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Table</Typography>
      <Typography color="text.secondary" mb={3}>
        데이터 테이블. 헤더 클릭으로 정렬할 수 있습니다.
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ '& th': { fontWeight: 700, bgcolor: 'grey.100' } }}>
              {['name', 'age', 'city', 'score'].map((col) => (
                <TableCell key={col}>
                  <TableSortLabel
                    active={orderBy === col}
                    direction={orderBy === col ? order : 'asc'}
                    onClick={() => handleSort(col)}
                  >
                    {{ name: '이름', age: '나이', city: '도시', score: '점수' }[col]}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sorted.map((row) => (
              <TableRow key={row.name} hover>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
```

- [ ] **Step 2: ListPage.jsx**

```jsx
// src/pages/display/ListPage.jsx
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import Paper from '@mui/material/Paper'

const MESSAGES = [
  { id: 1, from: '김민준', subject: '회의 일정 안내', preview: '다음 주 월요일 오전 10시에…', time: '10:23' },
  { id: 2, from: '이서연', subject: 'PR 리뷰 요청',   preview: 'feature/login 브랜치 확인 부탁드려요.', time: '어제' },
  { id: 3, from: '박도현', subject: '디자인 시안 공유', preview: 'Figma 링크 첨부드립니다.',  time: '월' },
]

export default function ListPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>List</Typography>
      <Typography color="text.secondary" mb={3}>
        아이템 목록. 아바타, 아이콘, 보조 텍스트, 버튼 등을 조합할 수 있습니다.
      </Typography>

      <Typography variant="h6" gutterBottom>메일함 목록</Typography>
      <Paper sx={{ mb: 4 }}>
        <List>
          {MESSAGES.map((msg, i) => (
            <Box key={msg.id}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar>{msg.from[0]}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`${msg.from} — ${msg.subject}`}
                  secondary={msg.preview}
                />
                <Typography variant="caption" color="text.secondary">{msg.time}</Typography>
              </ListItemButton>
              {i < MESSAGES.length - 1 && <Divider />}
            </Box>
          ))}
        </List>
      </Paper>

      <Typography variant="h6" gutterBottom>아이콘 List</Typography>
      <Paper>
        <List>
          <ListItem>
            <ListItemAvatar><Avatar><InboxIcon /></Avatar></ListItemAvatar>
            <ListItemText primary="받은 편지함" secondary="3통의 새 메일" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar><Avatar sx={{ bgcolor: 'secondary.main' }}><DraftsIcon /></Avatar></ListItemAvatar>
            <ListItemText primary="임시 보관함" secondary="1통의 초안" />
          </ListItem>
        </List>
      </Paper>
    </Box>
  )
}
```

> **Note:** ListPage는 `@mui/icons-material`을 사용한다. 설치 명령: `npm install @mui/icons-material`
> 이 Task 전에 한 번만 실행하면 된다.

- [ ] **Step 2-pre: 아이콘 패키지 설치**

```bash
npm install @mui/icons-material
```

- [ ] **Step 3: CardPage.jsx**

```jsx
// src/pages/display/CardPage.jsx
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const CARDS = [
  { title: '서울 남산타워', desc: '서울의 상징적인 랜드마크. 야경이 아름답습니다.', img: 'https://picsum.photos/seed/seoul/300/200', tag: '관광' },
  { title: '부산 해운대',   desc: '한국 최고의 해변. 여름철 피서지로 유명합니다.',   img: 'https://picsum.photos/seed/busan/300/200', tag: '해변' },
  { title: '제주 한라산',   desc: '한국의 최고봉. 사계절 아름다운 자연경관.',        img: 'https://picsum.photos/seed/jeju/300/200',  tag: '등산' },
]

export default function CardPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Card</Typography>
      <Typography color="text.secondary" mb={3}>
        정보를 카드 형태로 그룹화. 미디어, 콘텐츠, 액션 영역을 조합합니다.
      </Typography>

      <Grid container spacing={3}>
        {CARDS.map((c) => (
          <Grid item xs={12} sm={6} md={4} key={c.title}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia component="img" height="160" image={c.img} alt={c.title} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6">{c.title}</Typography>
                <Typography variant="body2" color="text.secondary">{c.desc}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">자세히 보기</Button>
                <Button size="small" color="secondary">저장</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
```

- [ ] **Step 4: ChipPage.jsx**

```jsx
// src/pages/display/ChipPage.jsx
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
      <Stack direction="row" spacing={1} mb={3} flexWrap="wrap">
        <Chip label="Filled (기본)" />
        <Chip label="Outlined" variant="outlined" />
        <Chip label="Clickable" onClick={() => {}} />
        <Chip label="Deletable" onDelete={() => {}} />
      </Stack>

      <Typography variant="h6" gutterBottom>Colors</Typography>
      <Stack direction="row" spacing={1} mb={3} flexWrap="wrap">
        <Chip label="Primary"   color="primary" />
        <Chip label="Secondary" color="secondary" />
        <Chip label="Error"     color="error" />
        <Chip label="Warning"   color="warning" />
        <Chip label="Success"   color="success" />
      </Stack>

      <Typography variant="h6" gutterBottom>아바타 & 아이콘</Typography>
      <Stack direction="row" spacing={1} mb={4} flexWrap="wrap">
        <Chip avatar={<Avatar>K</Avatar>} label="김민준" />
        <Chip icon={<FaceIcon />} label="아이콘 칩" color="primary" />
      </Stack>

      <Typography variant="h6" gutterBottom>기술 스택 필터 (클릭하여 선택)</Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
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
```

- [ ] **Step 5: AvatarPage.jsx**

```jsx
// src/pages/display/AvatarPage.jsx
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Stack from '@mui/material/Stack'
import Badge from '@mui/material/Badge'
import PersonIcon from '@mui/icons-material/Person'

export default function AvatarPage() {
  const colors = ['#f44336','#e91e63','#9c27b0','#3f51b5','#2196f3','#009688']
  const names  = ['김민준','이서연','박도현','최지우','정하은','강준서']

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Avatar</Typography>
      <Typography color="text.secondary" mb={3}>
        사용자 프로필 이미지 또는 이니셜을 표시하는 컴포넌트입니다.
      </Typography>

      <Typography variant="h6" gutterBottom>이미지 / 이니셜 / 아이콘</Typography>
      <Stack direction="row" spacing={2} mb={4} alignItems="center">
        <Avatar src="https://picsum.photos/seed/user1/80/80" alt="User" />
        <Avatar sx={{ bgcolor: '#3f51b5' }}>K</Avatar>
        <Avatar><PersonIcon /></Avatar>
      </Stack>

      <Typography variant="h6" gutterBottom>Sizes</Typography>
      <Stack direction="row" spacing={2} mb={4} alignItems="center">
        <Avatar sx={{ width: 32,  height: 32,  fontSize: 14 }}>S</Avatar>
        <Avatar sx={{ width: 48,  height: 48  }}>M</Avatar>
        <Avatar sx={{ width: 72,  height: 72,  fontSize: 28 }}>L</Avatar>
      </Stack>

      <Typography variant="h6" gutterBottom>팀 멤버</Typography>
      <Stack direction="row" spacing={2} mb={4} flexWrap="wrap">
        {names.map((name, i) => (
          <Badge
            key={name}
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={<Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: i < 3 ? 'success.main' : 'grey.400', border: '2px solid white' }} />}
          >
            <Avatar sx={{ bgcolor: colors[i], cursor: 'pointer' }} title={name}>
              {name[0]}
            </Avatar>
          </Badge>
        ))}
      </Stack>

      <Typography variant="h6" gutterBottom>AvatarGroup</Typography>
      <AvatarGroup max={4}>
        {names.map((name, i) => (
          <Avatar key={name} sx={{ bgcolor: colors[i] }}>{name[0]}</Avatar>
        ))}
      </AvatarGroup>
    </Box>
  )
}
```

---

## Task 7: 피드백 카테고리 페이지 5개

**Files:**
- Create: `src/pages/feedback/SnackbarPage.jsx`
- Create: `src/pages/feedback/DialogPage.jsx`
- Create: `src/pages/feedback/AlertPage.jsx`
- Create: `src/pages/feedback/ProgressPage.jsx`
- Create: `src/pages/feedback/SkeletonPage.jsx`

- [ ] **Step 1: SnackbarPage.jsx**

```jsx
// src/pages/feedback/SnackbarPage.jsx
import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

export default function SnackbarPage() {
  const [open, setOpen]     = useState(false)
  const [config, setConfig] = useState({ message: '', severity: 'info' })

  const show = (message, severity) => {
    setConfig({ message, severity })
    setOpen(true)
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Snackbar</Typography>
      <Typography color="text.secondary" mb={3}>
        화면 하단에 잠깐 나타나는 알림. 자동으로 사라집니다.
      </Typography>

      <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
        <Button variant="contained" color="success"   onClick={() => show('저장되었습니다!', 'success')}>성공</Button>
        <Button variant="contained" color="error"     onClick={() => show('오류가 발생했습니다.', 'error')}>오류</Button>
        <Button variant="contained" color="warning"   onClick={() => show('경고: 변경사항이 있습니다.', 'warning')}>경고</Button>
        <Button variant="contained" color="info"      onClick={() => show('새 업데이트가 있습니다.', 'info')}>정보</Button>
      </Stack>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={config.severity} onClose={() => setOpen(false)} sx={{ width: '100%' }}>
          {config.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}
```

- [ ] **Step 2: DialogPage.jsx**

```jsx
// src/pages/feedback/DialogPage.jsx
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

      {/* 확인 Dialog */}
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

      {/* 폼 Dialog */}
      <Dialog open={formOpen} onClose={() => setFormOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>프로필 수정</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField label="이름" defaultValue="김민준" fullWidth />
            <TextField label="이메일" defaultValue="kim@example.com" fullWidth />
            <TextField label="소개" multiline rows={3} fullWidth />
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
```

- [ ] **Step 3: AlertPage.jsx**

```jsx
// src/pages/feedback/AlertPage.jsx
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
```

- [ ] **Step 4: ProgressPage.jsx**

```jsx
// src/pages/feedback/ProgressPage.jsx
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress from '@mui/material/LinearProgress'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

export default function ProgressPage() {
  const [progress, setProgress] = useState(0)
  const [running,  setRunning]  = useState(false)

  useEffect(() => {
    if (!running) return
    if (progress >= 100) { setRunning(false); return }
    const timer = setTimeout(() => setProgress(p => Math.min(p + 5, 100)), 200)
    return () => clearTimeout(timer)
  }, [running, progress])

  const startProgress = () => { setProgress(0); setRunning(true) }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Progress</Typography>
      <Typography color="text.secondary" mb={3}>
        작업 진행 상태를 시각적으로 표시합니다. 결정적(값 지정) / 비결정적(무한 루프) 두 가지.
      </Typography>

      <Typography variant="h6" gutterBottom>CircularProgress</Typography>
      <Stack direction="row" spacing={4} alignItems="center" mb={4}>
        <Box textAlign="center">
          <CircularProgress />
          <Typography variant="caption" display="block" mt={1}>비결정적</Typography>
        </Box>
        <Box textAlign="center">
          <CircularProgress variant="determinate" value={75} />
          <Typography variant="caption" display="block" mt={1}>75%</Typography>
        </Box>
        <Box textAlign="center">
          <CircularProgress color="secondary" />
          <Typography variant="caption" display="block" mt={1}>Secondary</Typography>
        </Box>
        <Box textAlign="center">
          <CircularProgress color="success" size={60} />
          <Typography variant="caption" display="block" mt={1}>Large</Typography>
        </Box>
      </Stack>

      <Typography variant="h6" gutterBottom>LinearProgress</Typography>
      <Stack spacing={2} mb={4}>
        <LinearProgress />
        <LinearProgress color="secondary" />
        <LinearProgress variant="determinate" value={60} />
        <LinearProgress variant="buffer" value={70} valueBuffer={85} />
      </Stack>

      <Typography variant="h6" gutterBottom>인터랙티브 진행바</Typography>
      <Stack spacing={2} maxWidth={400}>
        <Button variant="contained" onClick={startProgress} disabled={running}>
          {running ? '진행 중…' : '업로드 시작'}
        </Button>
        <LinearProgress variant="determinate" value={progress} />
        <Typography variant="body2" color="text.secondary">{progress}%</Typography>
      </Stack>
    </Box>
  )
}
```

- [ ] **Step 5: SkeletonPage.jsx**

```jsx
// src/pages/feedback/SkeletonPage.jsx
import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'

function SkeletonCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <Skeleton variant="rectangular" height={160} />
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
          <Skeleton variant="circular" width={40} height={40} />
          <Box flex={1}>
            <Skeleton width="80%" />
            <Skeleton width="60%" />
          </Box>
        </Stack>
        <Skeleton />
        <Skeleton width="80%" />
      </CardContent>
    </Card>
  )
}

function RealCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <Box sx={{ height: 160, bgcolor: 'primary.light', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography color="white" variant="h6">이미지</Typography>
      </Box>
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
          <Avatar sx={{ bgcolor: 'secondary.main' }}>K</Avatar>
          <Box>
            <Typography variant="subtitle2">김민준</Typography>
            <Typography variant="caption" color="text.secondary">5분 전</Typography>
          </Box>
        </Stack>
        <Typography variant="body2">로딩이 완료된 실제 콘텐츠입니다.</Typography>
        <Typography variant="body2" color="text.secondary">두 번째 줄 내용입니다.</Typography>
      </CardContent>
    </Card>
  )
}

export default function SkeletonPage() {
  const [loaded, setLoaded] = useState(false)
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Skeleton</Typography>
      <Typography color="text.secondary" mb={3}>
        콘텐츠 로딩 중 자리를 차지하는 플레이스홀더. 깜빡임 없는 UX를 제공합니다.
      </Typography>

      <FormControlLabel
        control={<Switch checked={loaded} onChange={(e) => setLoaded(e.target.checked)} />}
        label={loaded ? '로딩 완료' : '로딩 중…'}
        sx={{ mb: 3 }}
      />

      {loaded ? <RealCard /> : <SkeletonCard />}
    </Box>
  )
}
```

---

## Task 8: 탐색 카테고리 페이지 5개

**Files:**
- Create: `src/pages/navigation/TabsPage.jsx`
- Create: `src/pages/navigation/StepperPage.jsx`
- Create: `src/pages/navigation/BreadcrumbsPage.jsx`
- Create: `src/pages/navigation/AccordionPage.jsx`
- Create: `src/pages/navigation/PaginationPage.jsx`

- [ ] **Step 1: TabsPage.jsx**

```jsx
// src/pages/navigation/TabsPage.jsx
import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

const PANELS = [
  { label: '소개',  content: 'MUI는 구글의 Material Design을 기반으로 한 React UI 라이브러리입니다.' },
  { label: '설치',  content: 'npm install @mui/material @emotion/react @emotion/styled' },
  { label: '사용법', content: 'import Button from "@mui/material/Button" 으로 개별 컴포넌트를 불러옵니다.' },
  { label: '테마',  content: 'ThemeProvider + createTheme으로 전역 색상, 폰트, 간격을 커스터마이징합니다.' },
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
          {['Button','TextField','Select','Checkbox','Slider','Table','List','Card','Chip','Avatar'].map(label => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>
      </Box>
    </Box>
  )
}
```

- [ ] **Step 2: StepperPage.jsx**

```jsx
// src/pages/navigation/StepperPage.jsx
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
  { label: '계정 정보',  content: <Stack spacing={2}><TextField label="이름" size="small" /><TextField label="이메일" size="small" /></Stack> },
  { label: '배송 주소',  content: <Stack spacing={2}><TextField label="주소" size="small" /><TextField label="상세 주소" size="small" /></Stack> },
  { label: '결제 수단',  content: <Stack spacing={2}><TextField label="카드 번호" size="small" /><TextField label="유효 기간" size="small" /></Stack> },
  { label: '주문 확인',  content: <Typography>입력하신 정보를 확인하고 주문을 완료하세요.</Typography> },
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
```

- [ ] **Step 3: BreadcrumbsPage.jsx**

```jsx
// src/pages/navigation/BreadcrumbsPage.jsx
import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import HomeIcon from '@mui/icons-material/Home'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const TREE = {
  home: { label: '홈', children: ['쇼핑', '블로그', '고객센터'] },
  쇼핑: { label: '쇼핑', children: ['전자기기', '패션', '식품'] },
  전자기기: { label: '전자기기', children: ['스마트폰', '노트북', '태블릿'] },
}

export default function BreadcrumbsPage() {
  const [path, setPath] = useState(['home'])

  const navigate = (to) => {
    const idx = path.indexOf(to)
    if (idx !== -1) { setPath(path.slice(0, idx + 1)); return }
    setPath([...path, to])
  }

  const current = TREE[path[path.length - 1]]

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Breadcrumbs</Typography>
      <Typography color="text.secondary" mb={3}>
        현재 위치를 계층 구조로 표시합니다. 뒤로가기 내비게이션에 유용합니다.
      </Typography>

      <Typography variant="h6" gutterBottom>기본</Typography>
      <Stack spacing={2} mb={4}>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="#">홈</Link>
          <Link underline="hover" color="inherit" href="#">쇼핑</Link>
          <Link underline="hover" color="inherit" href="#">전자기기</Link>
          <Typography color="text.primary">스마트폰</Typography>
        </Breadcrumbs>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          <Link underline="hover" color="inherit" href="#"><HomeIcon sx={{ mr: 0.5, fontSize: 16, verticalAlign: 'middle' }} />홈</Link>
          <Link underline="hover" color="inherit" href="#">카테고리</Link>
          <Typography color="text.primary">현재 페이지</Typography>
        </Breadcrumbs>
      </Stack>

      <Typography variant="h6" gutterBottom>인터랙티브 탐색</Typography>
      <Breadcrumbs sx={{ mb: 2 }}>
        {path.map((key, i) => {
          const label = TREE[key]?.label ?? key
          return i < path.length - 1
            ? <Link key={key} underline="hover" color="inherit" onClick={() => setPath(path.slice(0, i + 1))} sx={{ cursor: 'pointer' }}>{label}</Link>
            : <Typography key={key} color="text.primary">{label}</Typography>
        })}
      </Breadcrumbs>
      {current?.children && (
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          {current.children.map(child => (
            <Chip key={child} label={child} clickable onClick={() => navigate(child)} />
          ))}
        </Stack>
      )}
    </Box>
  )
}
```

- [ ] **Step 4: AccordionPage.jsx**

```jsx
// src/pages/navigation/AccordionPage.jsx
import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const FAQS = [
  { q: 'MUI는 무료인가요?',         a: '네, MUI Core는 MIT 라이선스로 무료입니다. MUI X의 일부 고급 컴포넌트는 유료입니다.' },
  { q: 'TypeScript를 지원하나요?',   a: '네, MUI는 TypeScript로 작성되어 완전한 타입 지원을 제공합니다.' },
  { q: '테마를 커스터마이징할 수 있나요?', a: 'createTheme()으로 색상, 타이포그래피, 간격 등 모든 디자인 토큰을 변경할 수 있습니다.' },
  { q: 'Next.js와 함께 사용할 수 있나요?', a: '네, @mui/material-nextjs 패키지로 SSR을 지원합니다.' },
  { q: '아이콘은 어떻게 사용하나요?', a: '@mui/icons-material 패키지를 설치 후 import하면 2,000개 이상의 아이콘을 사용할 수 있습니다.' },
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
```

- [ ] **Step 5: PaginationPage.jsx**

```jsx
// src/pages/navigation/PaginationPage.jsx
import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'

const ITEMS_PER_PAGE = 5
const ALL_ITEMS = Array.from({ length: 47 }, (_, i) => ({
  id: i + 1,
  title: `항목 ${i + 1}`,
  desc: `이것은 ${i + 1}번째 데이터입니다.`,
}))

export default function PaginationPage() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(ALL_ITEMS.length / ITEMS_PER_PAGE)
  const items = ALL_ITEMS.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Pagination</Typography>
      <Typography color="text.secondary" mb={3}>
        페이지 단위로 데이터를 나눠서 탐색합니다.
      </Typography>

      <Typography variant="h6" gutterBottom>기본</Typography>
      <Stack spacing={2} mb={4}>
        <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} variant="outlined" />
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" gutterBottom>
        데이터 페이지네이션 ({ALL_ITEMS.length}개 항목)
      </Typography>
      <Stack spacing={1} mb={3}>
        {items.map((item) => (
          <Paper key={item.id} sx={{ p: 2 }}>
            <Typography fontWeight={600}>{item.title}</Typography>
            <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
          </Paper>
        ))}
      </Stack>
      <Pagination
        count={totalPages}
        page={page}
        onChange={(_, v) => setPage(v)}
        color="primary"
      />
      <Typography variant="caption" color="text.secondary" mt={1} display="block">
        {page} / {totalPages} 페이지
      </Typography>
    </Box>
  )
}
```

---

## Task 9: 브라우저 검증

CLAUDE.md 워크플로우에 따라 Playwright로 검증한다.

- [ ] **Step 1: 개발 서버 확인**

```bash
# 이미 실행 중이면 스킵. 아니면:
npm run dev
```

Expected: `http://localhost:5173` 에서 앱 실행

- [ ] **Step 2: Playwright로 주요 경로 확인**

각 카테고리 드롭다운 메뉴 열림 → 항목 클릭 → 해당 페이지 렌더링 확인
- 헤더 AppBar 고정 여부
- 4개 드롭다운 각각 열림/닫힘
- 대표 페이지 최소 5개 라우팅 정상 (Button, Dialog, Table, Stepper, Pagination)
- 콘솔 오류 0건

- [ ] **Step 3: 발견된 오류 즉시 수정 후 재검증**
