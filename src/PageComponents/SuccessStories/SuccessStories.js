import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Quotations from '../../assets/homeQuotes.png';

const Testimonials = [
  {
    quote:
      "When I was considering Judd's online personal training program I wasn't sure if I could make the commitment to myself AND to him. Judd convinced me to give it a try since his programs are tailored to compliment my fitness background and goals. Plus, he was able to design a customized exercise program for my home gym using his Serious Fitness Smartphone app which includes more than 2,000 exercises including video demonstrations. This made my life and exercise routine much easier. When I first started his program my biggest goals were to feel my body move better again while gaining significant lean muscle & strength. After just 4-weeks of following his program and coaching, I certainly noticed a HUGE improvement in all of those. Also, due to my increased strength, I am more confident in myself with a healthier body and mind. I love Judd's online personal training program!",
    name: 'WILKEN HAY',
    location: 'ASSOCIATE DIRECTOR, GLOBAL STUDY START UP LEAD',
  },
  {
    quote:
      'If you are looking for a fitness coach I highly recommend Judd NeSmith. For those who know me well, know eating healthy and working out is foreign to me. It’s very rare to find me in the kitchen and you will probably not ever find me in a gym! As a client, Judd listened to my every desire, goal, fears, willingness, concerns, and most of all he listened to my honest dreadful attitude about working out. He genuinely cares about his clients health and wants to help anyone who needs/wants help. He doesn’t push you to reach his goal, or what he thinks your goal should be, expect you to be on any certain level, or even know how to do it! He will teach you everything! Another plus, he is the “Fitness Expert” for Best Reviews (you may have seen him on TV). But, he is much more than just that. Check him out!',
    name: 'BRENT SAKOWSKI',
    location: 'ASSOCIATE DIRECTOR, GLOBAL STUDY START UP LEAD',
  },
  {
    quote:
      'Judd really focuses on where you are currently, what you want to achieve, and getting you there without injury. He customizes exercises to your level and based on your home gym setup, whether simple or elaborate. My wife, Jane Sakowski, and I highly recommend his program.',
    name: 'PASCHA TIESZEN',
    location: 'ASSOCIATE DIRECTOR, GLOBAL STUDY START UP LEAD',
  },
  {
    quote:
      'I have been friends with Judd Nesmith since college, and even then, he was a dedicated athlete whose first priority was to motivate his friends towards excellence in their personal athletic pursuits. After undergoing rotator cuff and bicep repair over a year ago, I knew I needed an expert’s help beyond the standard prescribed PT. Judd and his programs immediately came to mind. Not only have I been able to strengthen my body and to recover from my shoulder surgery completely, I am also benefiting overall from improved mobility and flexibility as well as learning about nutritionally balanced eating. Before, I was living daily in pain, and now, I feel stronger, healthier and most importantly, I am pain free. I am grateful for Judd taking the time to utilize his decades of experience in the world of sports and fitness to create programs that are tailored to my age and to my fitness goals. Thanks, Judd!',
    name: 'WILKEN HAY',
    location: 'ASSOCIATE DIRECTOR, GLOBAL STUDY START UP LEAD',
  },
];

const SuccessStories = () => {
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
          paddingBottom: '2em',
          paddingTop: '6em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          backgroundColor: 'secondary.main',
        }}
      >
        <Typography
          variant='h3'
          sx={{ color: 'primary.main', fontWeight: 'bold' }}
        >
          SUCCESS STORIES
        </Typography>
        <Typography variant='h6' sx={{ color: 'primary.main' }}>
          WHAT OUR AMAZING CLIENTS SAY
        </Typography>
      </Box>
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
          paddingTop: '6em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          backgroundColor: 'primary.main',
          gap: '2em',
        }}
      >
        {Testimonials.map((item) => (
          <Box
            sx={{
              width: '100%',
              height: 'auto',
              padding: '3em',
              display: 'flex',
              alignItems: 'start',
              justifyContent: 'space-between',
              gap: '1em',
              borderWidth: '3px',
              borderStyle: 'solid',
              borderColor: 'info.main',
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${Quotations})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                height: '100px',
                width: '100px',
              }}
            />
            <Box
              sx={{
                width: '88%',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'center',
                gap: '.5em',
                paddingTop: '1em',
              }}
            >
              <Typography variant='p'>{item.quote}</Typography>
              <Typography
                variant='h5'
                sx={{
                  marginLeft: 'auto',
                  color: 'info.main',
                  fontWeight: 'bold',
                }}
              >
                {item.name}
              </Typography>
              <Typography variant='h6' sx={{ marginLeft: 'auto' }}>
                {item.location}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SuccessStories;
