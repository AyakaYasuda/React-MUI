import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import iguana from '../assets/images/contemplative-reptile.jpg';


const ImageCard = () => {
  return (
    <Card
      sx={{
        mt: 5,
        ml: 2,
        p: 2.5,
        maxWidth: 345,
      }}
    >
      <CardMedia
        component='img'
        alt='green iguana'
        height='140'
        image={iguana}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Lizard
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' variant='contained'>Share</Button>
        <Fab size='small' variant='extended' color='secondary'>Learn More</Fab>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
