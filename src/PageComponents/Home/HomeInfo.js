import React from 'react';
import Box from '@mui/material/Box';
import fillerPic from '../../assets/homeheader.png';
import Typography from '@mui/material/Typography';

const HomeInfo = () => {
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
        paddingBottom: '2em',
        paddingTop: '7em',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          width: { xl: '60%', lg: '60%', md: '100%', sm: '100%', xs: '100%' },
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          gap: '.5em',
        }}
      >
        <Typography
          variant='h3'
          sx={{
            color: 'secondary.main',
            textAlign: 'left',
            fontWeight: 'bold',
          }}
        >
          PERSONAL TRAINING IN BOULDER
        </Typography>
        <Typography
          variant='h4'
          sx={{ color: 'info.main', textAlign: 'left', fontWeight: 'bold' }}
        >
          WE DESIGN CUSTOMIZED FITNESS PROGRAMS
        </Typography>
        <Typography
          variant='h5'
          sx={{
            color: 'secondary.main',
            textAlign: 'left',
            fontWeight: 'bold',
            marginBottom: '1em',
          }}
        >
          AND PROVIDE NUTRITION COACHING FOR THE 50+ POPULATION
        </Typography>
        <Typography
          variant='p'
          sx={{
            color: 'secondary.main',
            textAlign: 'left',
            marginBottom: '1em',
          }}
        >
          Since 2003, Serious Fitness has been providing expert 1-on-1 personal
          training in Boulder, CO with a growing waiting list of new clients. To
          help more individuals locally AND worldwide, we created an online
          personal training platform in 2020 using the Serious Fitness
          Smartphone app. This unique online personal training system is
          designed for men and women ages 50+ and includes highly effective
          strength and conditioning programs as well as nutrition coaching to
          improve every aspect of their health.{' '}
        </Typography>
        <Typography
          variant='p'
          sx={{ color: 'secondary.main', textAlign: 'left' }}
        >
          Our mission is to help people enjoy life to its fullest by supervising
          and creating expertly designed fitness programs. Whether it’s
          improving lean muscle development & fat loss, crushing it on the ski
          slopes & mountain bike trails, running a faster 10k, improving lost
          mobility, minimizing aches and pains, or just looking better naked, we
          value an individual’s need to improve their quality of life.
        </Typography>
      </Box>
      <Box
        sx={{
          width: '34%',
          height: '36vh',
          display: {
            xl: 'flex',
            lg: 'flex',
            md: 'none',
            sm: 'none',
            xs: 'none',
          },
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          gap: '.2em',
          backgroundImage: `url(${fillerPic})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: '.5em',
        }}
      />
    </Box>
  );
};

export default HomeInfo;
