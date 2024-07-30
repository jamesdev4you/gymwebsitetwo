import React from 'react';
import NavBar from './PageComponents/Navbar/navbar';
import Home from './PageComponents/Home/Home';
import SuccessStories from './PageComponents/SuccessStories/SuccessStories';
import Contact from './PageComponents/Contact/Contact';
import Media from './PageComponents/Media/Media';
import RealLifePT from './PageComponents/RealLifePT/RealLifePT';
import OnlinePT from './PageComponents/OnlinePT/OnlinePT';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#000000',
    },
    info: {
      main: '#3333cc',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<NavBar />} color='secondary'>
          <Route path='/' element={<Home />} color='secondary' />
          <Route
            path='/successstories'
            element={<SuccessStories />}
            color='secondary'
          />
          <Route path='/contact' element={<Contact />} color='secondary' />
          <Route path='/media' element={<Media />} color='secondary' />
          <Route
            path='/programs/reallife1on1training'
            element={<RealLifePT />}
            color='secondary'
          />
          <Route
            path='/programs/remote1on1training'
            element={<OnlinePT />}
            color='secondary'
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
