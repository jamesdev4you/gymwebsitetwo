import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Placeholder from '../../assets/homeheader.png';
import Grid from '@mui/material/Grid';
import {
  HomeHeaderButton,
  HomeTestimonialButton,
} from '../styledComponents.js';
import Footer from '../Footer/Footer.js';

const OnlinePT = () => {
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
          height: {
            xl: '45vh',
            lg: '50vh',
            md: '50vh',
            sm: '50vh',
            xs: '70vh',
          },
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
          sx={{ color: 'primary.main', fontWeight: 'bold', width: '100%' }}
        >
          PERSONAL TRAINING SERVICES IN BOULDER
        </Typography>
        <Typography
          variant='p'
          sx={{ color: 'primary.main', width: '100%', lineHeight: '26px' }}
        >
          WE GUARANTEE THAT WE'LL MAKE YOU INCREDIBLY FIT. OUR PROGRAMS ARE
          PROVEN TO MAKE YOU LEANER, STRONGER & MORE MUSCULAR WHILE ALSO
          MINIMIZING OR ELIMINATING JOINT PAIN IF YOU COMMIT TO WORKING WITH US
          CONSISTENTLY FOR 6 TO 8 WEEKS.
        </Typography>
      </Box>
      <Box
        sx={{
          height: {
            xl: '100vh',
            lg: '100vh',
            md: '100vh',
            sm: 'auto',
            xs: 'auto',
          },
          width: '100%',
          paddingLeft: {
            xl: '20em',
            lg: '18em',
            md: '2em',
            sm: '2em',
            xs: '1em',
          },
          paddingRight: {
            xl: '20em',
            lg: '18em',
            md: '2em',
            sm: '2em',
            xs: '1em',
          },
          paddingBottom: '3em',
          paddingTop: '3em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'primary.main',
          gap: '.5em',
        }}
      >
        <Box
          sx={{
            width: '50%',
            height: 'auto',
            display: {
              xl: 'flex',
              lg: 'flex',
              md: 'flex',
              sm: 'none',
              xs: 'none',
            },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3em',
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${Placeholder})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              height: { xl: '50vh', lg: '30vh', md: '30vh' },
              width: '100%',
            }}
          />
          <Typography
            variant='h6'
            sx={{ color: 'secondary.main', width: '100%', lineHeight: '26px' }}
          >
            We understand that your demanding schedule and professional life
            depends on exceptional productivity and performance. You should
            expect the same results from your fitness routine. Serious Fitness
            guarantees that our programs will help you reach your fitness goals.
            Whether it is decreasing fat and increasing lean muscle mass,
            improving strength and cardiovascular performance or managing injury
            prevention and joint pain we guarantee that our programs will
            deliver if you can commit to our programs for at least 6 to 8 weeks.
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xl: '45%', lg: '45%', md: '45%', sm: '100%', xs: '100%' },
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3em',
          }}
        >
          <Grid
            container
            sx={{
              width: '100%',
              height: 'auto',
              backgroundColor: 'primary.main',
              borderRadius: '5px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '1em',
                border: '1px solid black',
              }}
            >
              <Typography variant='h6'>VIP</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '1em',
                borderLeft: '1px solid black',
                borderRight: '1px solid black',
                borderBottom: '1px solid black',
              }}
            >
              <Typography variant='h4'>$760</Typography>
              <Typography variant='p'>
                $95/session (min 8 sessions/m)
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '1em',
                borderLeft: '1px solid black',
                borderRight: '1px solid black',
                borderBottom: '1px solid black',
              }}
            >
              <Typography variant='p' sx={{ textAlign: 'center' }}>
                1-on-1 personal training for women and men in Boulder, CO.
                Workouts supervised at "Judd's Gym" in Gunbarrel.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '1em',
                borderLeft: '1px solid black',
                borderRight: '1px solid black',
                borderBottom: '1px solid black',
              }}
            >
              <Typography variant='p' sx={{ textAlign: 'center' }}>
                No gym membership required
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '1em',
                borderLeft: '1px solid black',
                borderRight: '1px solid black',
                borderBottom: '1px solid black',
              }}
            >
              <Typography variant='p' sx={{ textAlign: 'center' }}>
                Expert Strength & Conditioning Coaching
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '1em',
                borderLeft: '1px solid black',
                borderRight: '1px solid black',
                borderBottom: '1px solid black',
              }}
            >
              <Typography variant='p' sx={{ textAlign: 'center' }}>
                Custom Exercise Programs
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '1em',
                borderLeft: '1px solid black',
                borderRight: '1px solid black',
                borderBottom: '1px solid black',
              }}
            >
              <Typography variant='p' sx={{ textAlign: 'center' }}>
                ​Serious Fitness App for Smartphone
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '1em',
                borderLeft: '1px solid black',
                borderRight: '1px solid black',
                borderBottom: '1px solid black',
              }}
            >
              <Typography variant='p' sx={{ textAlign: 'center' }}>
                ​Exercise Library
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '1em',
                borderLeft: '1px solid black',
                borderRight: '1px solid black',
                borderBottom: '1px solid black',
              }}
            >
              <Typography variant='p' sx={{ textAlign: 'center' }}>
                ​​Weekly Email Support
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '1em',
                borderLeft: '1px solid black',
                borderRight: '1px solid black',
                borderBottom: '1px solid black',
              }}
            >
              <Typography variant='p' sx={{ textAlign: 'center' }}>
                Weekly Phone Support
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '1em',
                borderLeft: '1px solid black',
                borderRight: '1px solid black',
                borderBottom: '1px solid black',
              }}
            >
              <HomeHeaderButton />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          height: '40vh',
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
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'secondary.main',
          gap: '1em',
        }}
      >
        <Typography
          variant='h5'
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'primary.main',
          }}
        >
          CLAIM YOUR FREE STRATEGY CALL!
        </Typography>
        <Typography
          variant='p'
          sx={{ textAlign: 'center', color: 'primary.main' }}
        >
          Experience what the Serious Fitness, personal training in Boulder
          programs can do for you first hand. Get a 20-minute free consultation
          with an expert coach, receive a review of your current training
          routine, learn how to maximize your workouts and get advice specific
          to you and your fitness goals. If you choose to work with us, that's
          great. If not, that's cool too.
        </Typography>
        <HomeTestimonialButton title={'start today'} />
      </Box>
      <Footer />
    </Box>
  );
};

export default OnlinePT;
