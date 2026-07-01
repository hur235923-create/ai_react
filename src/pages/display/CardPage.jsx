import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const CARDS = [
  { title: '서울 남산타워', desc: '서울의 상징적인 랜드마크. 야경이 아름답습니다.', img: 'https://picsum.photos/seed/seoul/300/200' },
  { title: '부산 해운대',   desc: '한국 최고의 해변. 여름철 피서지로 유명합니다.',   img: 'https://picsum.photos/seed/busan/300/200' },
  { title: '제주 한라산',   desc: '한국의 최고봉. 사계절 아름다운 자연경관.',        img: 'https://picsum.photos/seed/jeju/300/200'  },
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
