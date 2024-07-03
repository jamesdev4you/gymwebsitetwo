import React from 'react';
import Box from '@mui/material/Box';
import fillerPic from '../../assets/homeheader.png';
import Typography from '@mui/material/Typography';
import {
  HomeHeaderDarkButton,
  HomeHeaderLightButton,
} from '../styledComponents';
import HomeHeader from './HomeHeader';
import HomeInfo from './HomeInfo';
import HomeCards from './HomeCards';

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
        gap: '5em',
      }}
    >
      <HomeHeader />
      <HomeInfo />
      <HomeCards />
    </Box>
  );
};

export default Home;
