import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import CoffeeIcon from '@mui/icons-material/Coffee';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Grid } from '@mui/material';

    
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));




export default function UserCards() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <box>
      <CardHeader
        title="Erez Bitan"
        subheader="September 14, 2016"
      />
      </box>
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1601935093628-935710ebc41d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
        alt="user_pic"
          />
      <CardContent style={{ padding:7 }}>
      <Typography  sx={{ m: 0.5 }} variant="body2" color="text.secondary">
          <h3>Fetch me for:</h3>
        </Typography>
      <Box sx={{ margin: 0.5 ,
           width: 0.999,
          //  border: 1,
            p:1,
             display: "block"}}>
          <Chip icon={<CoffeeIcon />} sx={{ m: 0.5 }} size="small" label="Coffee" />
          <Chip icon={<SportsBarIcon />} sx={{ m: 0.5 }} size="small" label="Beers" padding={10}/>
          <Chip icon={<FitnessCenterIcon />} sx={{ m: 0.5 }} size="small" label="Workout"/>
          <Chip icon={<AccountBalanceIcon />} sx={{ m: 0.5 }} size="small" label="Visit an attraction"/>

      </Box>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >

          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}
