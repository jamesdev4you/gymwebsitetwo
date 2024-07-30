import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HomeCards = () => {
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
        paddingBottom: '7em',
        paddingTop: '7em',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
        backgroundColor: '#f7f7f7',
        flexDirection: {
          xl: 'row',
          lg: 'column',
          md: 'column',
          sm: 'column',
          xs: 'column',
        },
        gap: { xl: '0px', lg: '1em', md: '1em', sm: '1em', xs: '1em' },
      }}
    >
      <Box
        sx={{
          width: { xl: '30%', lg: '100%', md: '100%', sm: '100%', xs: '100%' },
          height: {
            xl: '50vh',
            lg: '30vh',
            md: '30vh',
            sm: '30vh',
            xs: '50vh',
          },
          borderStyle: 'solid',
          borderWidth: '3px',
          borderColor: 'info.main',
          backgroundColor: 'primary.main',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '2em',
        }}
      >
        <Typography
          variant='p'
          sx={{
            color: 'secondary.main',
            textAlign: 'center',
            lineHeight: '30px',
          }}
        >
          We provide 1-on-1 personal training in Boulder for women and men ages
          12 and up at Judd's Gym in Gunbarrel. Whatever your fitness goals,
          we'll help you get there with proven methods, consistency and support.
        </Typography>
        <Typography
          variant='h4'
          sx={{
            color: 'secondary.main',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          1-ON-1 PERSONAL TRAINING
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xl: '30%', lg: '100%' },
          height: {
            xl: '60vh',
            lg: '30vh',
            md: '30vh',
            sm: '30vh',
            xs: '50vh',
          },
          borderStyle: 'solid',
          borderWidth: '3px',
          borderColor: 'info.main',
          backgroundColor: 'primary.main',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '2em',
        }}
      >
        <Typography
          variant='p'
          sx={{
            color: 'secondary.main',
            textAlign: 'center',
            lineHeight: '30px',
          }}
        >
          Compared to 1-on-1 personal training, you get to workout on your own
          schedule while maximizing your savings. Our monthly online personal
          training is ideal for those who believe the frequency of weekly
          "in-person" training to be too expensive. Gym or no gym, we have you
          covered.
        </Typography>
        <Typography
          variant='h4'
          sx={{
            color: 'secondary.main',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          ONLINE PERSONAL ​TRAINING
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xl: '30%', lg: '100%' },
          height: {
            xl: '50vh',
            lg: '30vh',
            md: '30vh',
            sm: '30vh',
            xs: '50vh',
          },
          borderStyle: 'solid',
          borderWidth: '3px',
          borderColor: 'info.main',
          backgroundColor: 'primary.main',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '2em',
        }}
      >
        <Typography
          variant='p'
          sx={{
            color: 'secondary.main',
            textAlign: 'center',
            lineHeight: '30px',
          }}
        >
          We also offer an online personal training platform for men & women
          ages 50+ who are seeking to rebuild a stronger and more youthful
          looking physique while minimizing aches and pains.
        </Typography>
        <Typography
          variant='h4'
          sx={{
            color: 'secondary.main',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          THE AGELESS FITNESS FORMULA
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeCards;
