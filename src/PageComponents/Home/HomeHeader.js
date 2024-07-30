import React from 'react';
import Box from '@mui/material/Box';
import fillerPic from '../../assets/homeheader.png';
import Typography from '@mui/material/Typography';
import {
  HomeHeaderDarkButton,
  HomeHeaderLightButton,
} from '../styledComponents';

const HomeHeader = () => {
  return (
    <Box
      sx={{
        height: 'auto',
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: 'column',
        gap: '1em',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '60vh',
          backgroundImage: `url(${fillerPic})`,
          backgroundColor: '#999',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          zIndex: '-2',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: {
            xl: '35vh',
            lg: '35vh',
            md: '35vh',
            sm: '35vh',
            xs: '50vh',
          },
          display: 'flex',
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'row',
            sm: 'row',
            xs: 'column',
          },
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '25em',
        }}
      >
        <Box
          sx={{
            width: {
              xl: '50%',
              lg: '50%',
              md: '50%',
              sm: '50%',
              xs: '100%',
            },
            height: '100%',
            backgroundColor: 'secondary.main',
            padding: '2em',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
            gap: '1em',
          }}
        >
          <Typography
            variant='h6'
            sx={{ color: 'primary.main', fontWeight: 'bold' }}
          >
            1-ON-1 PERSONAL TRAINING
          </Typography>
          <Typography variant='p' sx={{ color: 'primary.main' }}>
            ELITE, RESULTS BASED PERSONAL TRAINING SERVICES IN THE BOULDER, CO
            AREA.
          </Typography>
          <HomeHeaderDarkButton />
        </Box>
        <Box
          sx={{
            width: {
              xl: '50%',
              lg: '50%',
              md: '50%',
              sm: '50%',
              xs: '100%',
            },
            height: '100%',
            backgroundColor: 'info.main',
            padding: '2em',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
            gap: '1em',
          }}
        >
          <Typography
            variant='h6'
            sx={{ color: 'primary.main', fontWeight: 'bold' }}
          >
            WORLDWIDE ONLINE PERSONAL TRAINING
          </Typography>
          <Typography variant='p' sx={{ color: 'primary.main' }}>
            HIGHLY EFFECTIVE ONLINE STRENGTH AND CONDITIONING PROGRAMS FOR MEN &
            WOMEN.
          </Typography>
          <HomeHeaderLightButton />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeHeader;
