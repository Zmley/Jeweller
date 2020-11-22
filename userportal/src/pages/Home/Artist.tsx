import React, { useEffect } from 'react'
import { Arist, Product } from 'models'
import useArtist from 'hooks/artist'
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Avatar,
  Divider
} from '@material-ui/core'
const ArtistList = (props: any) => {
  const { artists, getArtists } = useArtist()
  useEffect(() => {
    getArtists()
  }, [])
  console.log(artists)
  return (
    <div>
      {artists.map((artist: Arist, index: number) => (
        <Card
          style={{
            width: '94%',
            margin: 'auto',
            boxShadow: '0 -5px 15px 0 rgba(0,0,0,0.13)'
          }}
          key={index}
        >
          <CardActionArea>
            <CardContent style={{ padding: 8 }}>
              <Grid xs={12} container>
                <Grid xs={5} item>
                  <img src={artist.avatar} alt='avatar'></img>
                </Grid>

                <Grid xs={7} item container>
                  <Grid container item>
                    {artist.products.map((product: Product, index: number) => (
                      <Grid
                        item
                        style={
                          index == 0
                            ? {
                                marginLeft: 'auto',
                                position: 'relative',
                                left: (artist.products.length - index - 1) * 16
                              }
                            : {
                                position: 'relative',
                                left: (artist.products.length - index - 1) * 16
                              }
                        }
                      >
                        <Avatar
                          src={
                            'https://town-image.s3.amazonaws.com/27f4fabf-292c-463a-bc6e-958a333ea230.jpg'
                          }
                          sizes='33 33'
                        ></Avatar>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                      style={{ marginTop: 44 }}
                    >
                      {artist.username}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      {artist.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
          <Divider />

          <CardActions>
            <Grid container spacing={2}>
              <Grid item xs={3} style={{ textAlign: 'center' }}>
                {artist.productCount}
                <Typography style={{ fontSize: 11 }}>Artworks</Typography>
              </Grid>
              <Grid item xs={3} style={{ textAlign: 'center' }}>
                {artist.followerCount}
                <Typography style={{ fontSize: 11 }}>Follower</Typography>
              </Grid>
              <Grid item xs={3} style={{ textAlign: 'center' }}>
                {artist.likeCount}
                <Typography style={{ fontSize: 11 }}>Likes</Typography>
              </Grid>
            </Grid>

            <Button variant='outlined' style={{ marginLeft: 'auto' }}>
              Follow
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}

export default ArtistList
