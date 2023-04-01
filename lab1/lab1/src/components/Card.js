import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sj from './SJ.jpg';
export default function ImgMediaCard() {
  return (
    <center>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="400"
        image={sj}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        </Typography>
        <Typography variant="body2" color="text.secondary">
            ID CARD
        </Typography>
        <h5>Name:JAYARAM</h5>
            <h5>Age:18</h5>
            <h5>Gender:Male</h5>
            <h5>Email:jayaram@gmail.com</h5>
            <h5>Phone:+91 999999999</h5>
            <h5>ID number:2100031593</h5>
      </CardContent>
      
    </Card>
    </center>
  );
}
