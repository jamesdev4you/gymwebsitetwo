import React from 'react';
import Box from '@mui/material/Box';
import fillerPic from '../../assets/homeheader.png';
import Typography from '@mui/material/Typography';
import { HomeMissionButton } from '../styledComponents';
import HomeHeader from './HomeHeader';
import HomeInfo from './HomeInfo';
import HomeCards from './HomeCards';
import HomeQuotes from '../../assets/homeQuotes.png';
import HomeTestimonials from './HomeTestimonials';
import HomeMission from './HomeMission';
import Footer from '../Footer/Footer';

const Home = () => {
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
      <HomeHeader />
      <HomeInfo />
      <HomeCards />
      <HomeTestimonials />
      <HomeMission />
      <Footer />
    </Box>
  );
};

export default Home;
