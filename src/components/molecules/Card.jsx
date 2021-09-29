import * as React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '../atoms/Button';

export const Cards = ({variant, label, onClick, cards, date, day, task, detail, member }) => {
  return (
    cards ? cards.map((card) => {
      return (
      <Card sx={{ maxWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {card.date}
              </Typography>
              <Typography variant="h5" component="div">
                {card.day}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {card.task}
              </Typography>
              <Typography variant="body2">
                {card.detail} <br/> {card.member}
              </Typography>
            </CardContent>
            <CardActions>
              <Button 
              variant={card.variant}
              onClick={card.onClick}
              label={card.label}/>
            </CardActions>
          </Card>
      )
      }): 
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {date}
          </Typography>
          <Typography variant="h5" component="div">
            {day}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {task}
          </Typography>
          <Typography variant="body2">
            {detail}
            <br />
            {member}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
          variant={variant}
          onClick={onClick}
          label={label}/>
        </CardActions>
      </Card>
  )
}