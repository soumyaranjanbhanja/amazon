import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';

export default function ActionAreaCard() {
  return (
    <Card style={{ marginLeft:"500px",marginTop:"60px",maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          style={{ height: 140 }}
          component="img"
          image="/google.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Google
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Google is a Leading Multinational Software Company.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
