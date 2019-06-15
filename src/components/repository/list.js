import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';

const styles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const RepositoryList = () => {
  const classes = styles();

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {cards.map(card => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                    </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the content.
                    </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View
                    </Button>
                <Button size="small" color="primary">
                  Edit
                    </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default RepositoryList;