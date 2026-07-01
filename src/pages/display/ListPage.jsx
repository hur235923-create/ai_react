import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'

const MESSAGES = [
  { id: 1, from: '김민준', subject: '회의 일정 안내',   preview: '다음 주 월요일 오전 10시에…',         time: '10:23' },
  { id: 2, from: '이서연', subject: 'PR 리뷰 요청',     preview: 'feature/login 브랜치 확인 부탁드려요.', time: '어제' },
  { id: 3, from: '박도현', subject: '디자인 시안 공유', preview: 'Figma 링크 첨부드립니다.',             time: '월' },
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
