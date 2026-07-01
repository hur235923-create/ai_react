import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Stack from '@mui/material/Stack'
import Badge from '@mui/material/Badge'
import PersonIcon from '@mui/icons-material/Person'

export default function AvatarPage() {
  const colors = ['#f44336', '#e91e63', '#9c27b0', '#3f51b5', '#2196f3', '#009688']
  const names  = ['김민준', '이서연', '박도현', '최지우', '정하은', '강준서']

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Avatar</Typography>
      <Typography color="text.secondary" mb={3}>
        사용자 프로필 이미지 또는 이니셜을 표시하는 컴포넌트입니다.
      </Typography>

      <Typography variant="h6" gutterBottom>이미지 / 이니셜 / 아이콘</Typography>
      <Stack direction="row" spacing={2} mb={4} sx={{ alignItems: 'center' }}>
        <Avatar src="https://picsum.photos/seed/user1/80/80" alt="User" />
        <Avatar sx={{ bgcolor: '#3f51b5' }}>K</Avatar>
        <Avatar><PersonIcon /></Avatar>
      </Stack>

      <Typography variant="h6" gutterBottom>Sizes</Typography>
      <Stack direction="row" spacing={2} mb={4} sx={{ alignItems: 'center' }}>
        <Avatar sx={{ width: 32, height: 32, fontSize: 14 }}>S</Avatar>
        <Avatar sx={{ width: 48, height: 48 }}>M</Avatar>
        <Avatar sx={{ width: 72, height: 72, fontSize: 28 }}>L</Avatar>
      </Stack>

      <Typography variant="h6" gutterBottom>팀 멤버 (온라인 상태)</Typography>
      <Stack direction="row" spacing={2} mb={4} sx={{ flexWrap: 'wrap' }}>
        {names.map((name, i) => (
          <Badge
            key={name}
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <Box sx={{
                width: 10, height: 10, borderRadius: '50%',
                bgcolor: i < 3 ? 'success.main' : 'grey.400',
                border: '2px solid white'
              }} />
            }
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
