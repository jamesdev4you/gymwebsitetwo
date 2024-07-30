import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { HomeTestimonialButton } from '../styledComponents';
import HomeQuotes from '../../assets/homeQuotes.png';

const HomeTestimonials = () => {
  return (
    <Box
      sx={{
        height: {
          xl: '100vh',
          lg: '100vh',
          md: '70vh',
          sm: '70vh',
          xs: '100vh',
        },
        width: '100%',
        paddingLeft: {
          xl: '10em',
          lg: '4em',
          md: '2em',
          sm: '2em',
          xs: '1em',
        },
        paddingRight: {
          xl: '10em',
          lg: '4em',
          md: '2em',
          sm: '2em',
          xs: '1em',
        },
        gap: { xl: '0px', lg: '0px', md: '1em', sm: '2em', xs: '2em' },
        backgroundColor: 'secondary.main',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          height: '80%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: '50%',
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
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${HomeQuotes})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              height: '200px',
              width: '200px',
            }}
          />
          <Typography
            variant='h3'
            sx={{
              textAlign: 'left',
              color: 'primary.main',
              marginBottom: '.5em',
            }}
          >
            ​I STRONGLY RECOMMEND JUDD. HIS KNOWLEDGE AND DEDICATION HAVE MADE A
            HUGE POSITIVE IMPACT ON MY LIFE AND THE LIVES OF MANY AT SPECTRA.​
          </Typography>
          <Typography
            variant='p'
            sx={{ textAlign: 'left', color: 'primary.main' }}
          >
            <span style={{ color: '#3333cc' }}>NATHAN THOMPSON</span>, CEO &
            FOUNDER, SPECTRA LOGIC. CORPORATION
          </Typography>
        </Box>
        <Box
          sx={{
            height: '100%',
            width: { xl: '45%', lg: '45%', md: '100%', sm: '100%', xs: '100%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
            gap: '2em',
          }}
        >
          <Box
            sx={{
              height: 'auto',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${HomeQuotes})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                height: '100px',
                width: '100px',
              }}
            />
            <Typography
              variant='h6'
              sx={{
                textAlign: 'left',
                color: 'primary.main',
                marginBottom: '.5em',
              }}
            >
              AT AGE 54, I AM NOW IN THE BEST PHYSICAL SHAPE OF MY LIFE. JUDD
              WAS A LIFESAVER FOR ME.
            </Typography>
            <Typography
              variant='p'
              sx={{ textAlign: 'left', color: 'primary.main' }}
            >
              <span style={{ color: '#3333cc' }}>DAVE KENNEDY</span>, FOUNDER,
              MATCH.COM
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
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${HomeQuotes})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                height: '100px',
                width: '100px',
              }}
            />
            <Typography
              variant='h6'
              sx={{
                textAlign: 'left',
                color: 'primary.main',
                marginBottom: '.5em',
              }}
            >
              I WAS DOING A METABOLIC STRENGTH WORKOUT THE OTHER DAY — AND
              FLIPPED MY FIRST TIRE. THE DAMN THINGS WEIGHED MORE THAN I DO. AND
              I WILL TURN 65 IN TWO MONTHS.
            </Typography>
            <Typography
              variant='p'
              sx={{ textAlign: 'left', color: 'primary.main' }}
            >
              <span style={{ color: '#3333cc' }}>SHERRI LEOPARD</span>, FOUNDER,
              LEOPARD COMMUNICATIONS
            </Typography>
          </Box>
        </Box>
      </Box>
      <HomeTestimonialButton title={'Read More Stories'} />
    </Box>
  );
};

export default HomeTestimonials;
