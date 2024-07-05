import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Placeholder from '../../assets/homeheader.png';
import { HomeMissionButton, HomeTestimonialButton } from '../styledComponents';

const MediaStories = [
  {
    picture: Placeholder,
    color: 'secondary.main',
    textColor: 'primary.main',
    title: 'FEATURED ON FOX31 KDVR.COM',
    desc: "I was recently featured on KDVR FOX31's very popular morning show explaining some of my favorite exercises and fitness equipment that help alleviate pain.",
    button: <HomeTestimonialButton title={'Read The Article'} />,
  },
  {
    picture: Placeholder,
    color: 'primary.main',
    textColor: 'secondary.main',
    title: 'FEATURED ON FOX31 KDVR.COM',
    desc: "I was recently featured on KDVR FOX31's very popular morning show explaining some of my favorite exercises and fitness equipment that help alleviate pain.",
    button: <HomeMissionButton title={'Read The Article'} />,
  },
  {
    picture: Placeholder,
    color: 'secondary.main',
    textColor: 'primary.main',
    title: 'FEATURED ON FOX31 KDVR.COM',
    desc: "I was recently featured on KDVR FOX31's very popular morning show explaining some of my favorite exercises and fitness equipment that help alleviate pain.",
    button: <HomeTestimonialButton title={'Read The Article'} />,
  },
  {
    picture: Placeholder,
    color: 'primary.main',
    textColor: 'secondary.main',
    title: 'FEATURED ON FOX31 KDVR.COM',
    desc: "I was recently featured on KDVR FOX31's very popular morning show explaining some of my favorite exercises and fitness equipment that help alleviate pain.",
    button: <HomeMissionButton title={'Read The Article'} />,
  },
  {
    picture: Placeholder,
    color: 'secondary.main',
    textColor: 'primary.main',
    title: 'FEATURED ON FOX31 KDVR.COM',
    desc: "I was recently featured on KDVR FOX31's very popular morning show explaining some of my favorite exercises and fitness equipment that help alleviate pain.",
    button: <HomeTestimonialButton title={'Read The Article'} />,
  },
];

const Media = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          height: '50vh',
          width: '100%',
          paddingLeft: {
            xl: '20em',
            lg: '18em',
            md: '12em',
            sm: '2em',
            xs: '1em',
          },
          paddingRight: {
            xl: '20em',
            lg: '18em',
            md: '12em',
            sm: '2em',
            xs: '1em',
          },
          paddingBottom: '2em',
          paddingTop: '6em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          backgroundColor: 'secondary.main',
          gap: '.5em',
        }}
      >
        <Typography
          variant='h3'
          sx={{ color: 'primary.main', fontWeight: 'bold', width: '40%' }}
        >
          SERIOUS FITNESS ​IN THE MEDIA
        </Typography>
        <Typography variant='p' sx={{ color: 'primary.main', width: '40%' }}>
          CHECK OUT WHERE YOU MAY HAVE SEEN JUDD, OUR FOUNDER WHO IS FREQUENTLY
          FEATURED IN THE MEDIA.
        </Typography>
      </Box>
      <Box
        sx={{
          height: 'auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          backgroundColor: 'primary.main',
        }}
      >
        {MediaStories.map((item) => (
          <Box
            sx={{
              width: '100%',
              height: '50vh',
              padding: '3em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1em',
              paddingLeft: {
                xl: '20em',
                lg: '18em',
                md: '12em',
                sm: '2em',
                xs: '1em',
              },
              paddingRight: {
                xl: '20em',
                lg: '18em',
                md: '12em',
                sm: '2em',
                xs: '1em',
              },
              backgroundColor: item.color,
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${item.picture})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                height: '300px',
                width: '500px',
              }}
            />
            <Box
              sx={{
                width: '50%',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'center',
                gap: '.5em',
                marginBottom: '4em',
              }}
            >
              <Typography variant='h5' sx={{ color: item.textColor }}>
                {item.title}
              </Typography>
              <Typography
                variant='h5'
                sx={{
                  color: item.textColor,
                  fontWeight: 'bold',
                }}
              >
                {item.desc}
              </Typography>
              <Typography
                variant='h6'
                sx={{ marginLeft: 'auto', marginBottom: '2em' }}
              >
                {item.location}
              </Typography>
              {item.button}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Media;
