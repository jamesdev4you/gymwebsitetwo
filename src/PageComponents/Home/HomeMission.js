import React from 'react';
import Box from '@mui/material/Box';
import fillerPic from '../../assets/homeheader.png';
import Typography from '@mui/material/Typography';
import { HomeMissionButton } from '../styledComponents';

const HomeMission = () => {
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
        marginTop: '5em',
        marginBottom: '5em',
        backgroundColor: 'primary.main',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
        gap: '2em',
      }}
    >
      <Box
        sx={{
          width: '600px',
          height: '400px',
          display: 'flex',
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
      <Box
        sx={{
          width: '45%',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          gap: '1em',
        }}
      >
        <Typography
          variant='h4'
          sx={{ fontWeight: 'bold', color: 'secondary.main' }}
        >
          COMPANY MISSION
        </Typography>
        <Typography
          variant='p'
          sx={{
            color: 'secondary.main',
            textAlign: 'left',
          }}
        >
          Serious Fitness strives to help people become incredibly fit and
          strong. The company’s first marketing slogan created in 2004 was
          “Serious Fitness — For Those Willing To Give 100” and we still stand
          behind that tag line. We give 100% effort and focus to our clients. We
          also expect the same from them. Our track record speaks for itself.
        </Typography>
        <Typography
          variant='p'
          sx={{
            color: 'secondary.main',
            textAlign: 'left',
          }}
        >
          When seeking fitness advice and coaching individuals are overwhelmed
          with the latest “get fit quick” programs which seem to proliferate
          every week. More often than not, these programs are not created using
          the time tested fundamentals from exercise physiology, kinesiology and
          sports medicine. Serious Fitness, personal training in Boulder takes
          pride in our strict adherence to “sticking with the program” when
          applying our personal training modalities for our clients. As a matter
          of fact, our latest marketing slogan, created in 2015 and seen on the
          back of many client workout shirts says, “Serious Fitness — Fad Free
          Fitness Since 2003”.
        </Typography>
        <HomeMissionButton />
      </Box>
    </Box>
  );
};

export default HomeMission;
