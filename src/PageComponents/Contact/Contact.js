import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { HomeHeaderButton } from '../styledComponents.js';

const Contact = () => {
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
            xs: '60vh',
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
          sx={{ color: 'primary.main', fontWeight: 'bold' }}
        >
          GET IN TOUCH
        </Typography>
        <Typography variant='h6' sx={{ color: 'primary.main', width: '50%' }}>
          DO YOU HAVE MORE QUESTIONS OR YOU'D LIKE TO CLAIM YOUR STRATEGY CALL?
          GET IN TOUCH WITH JUDD TODAY!
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: {
            xl: '20em',
            lg: '10em',
            md: '8em',
            sm: '2em',
            xs: '1em',
          },
          paddingRight: {
            xl: '20em',
            lg: '10em',
            md: '8em',
            sm: '2em',
            xs: '1em',
          },
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'row',
            sm: 'column',
            xs: 'column',
          },
          marginTop: '5em',
          marginBottom: '5em',
          gap: '2em',
          backgroundColor: 'white',
          width: '100%',
          height: 'auto',
        }}
      >
        <Box
          sx={{
            width: {
              xl: '45%',
              lg: '45%',
              md: '45%',
              sm: '90%',
              xs: '100%',
            },
            backgroundColor: 'rgb(247, 247, 247)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '3em',
          }}
        >
          <Typography
            variant='h3'
            sx={{ color: 'secondary.main', width: '100%', textAlign: 'left' }}
          >
            CONTACT US
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'start',
              justifyContent: 'center',
              flexDirection: 'column',
              width: '100%',
              gap: '2em',
              margin: 'auto',
            }}
          >
            <Grid
              container
              sx={{
                width: '100%',
                height: '60vh',
                backgroundColor: 'primary.main',
                borderRadius: '5px',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '1em',
                padding: '1em',
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
                  padding: '0px',
                  borderRadius: '15px',
                }}
              >
                <TextField
                  id='outlined-basic'
                  label='First Name *'
                  variant='outlined'
                  sx={{
                    width: '90%',
                    '& label.Mui-focused': {
                      color: '#1B1E1E',
                    },
                    '& .MuiFormLabel-root': {
                      color: '#1B1E1E',
                    },
                    '& .MuiFormLabel-root.Mui-focused': {
                      color: '#1B1E1E',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: 'yellow',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#1B1E1E',
                      },
                      '&:hover fieldset': {
                        borderColor: '#1B1E1E',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'secondary.main',
                      },
                    },
                    '& .MuiInputBase-root': {
                      color: '#1B1E1E',
                    },
                  }}
                />
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
                  borderRadius: '15px',
                }}
              >
                <TextField
                  id='outlined-basic'
                  label='Last Name *'
                  variant='outlined'
                  sx={{
                    width: '90%',
                    '& label.Mui-focused': {
                      color: '#1B1E1E',
                    },
                    '& .MuiFormLabel-root': {
                      color: '#1B1E1E',
                    },
                    '& .MuiFormLabel-root.Mui-focused': {
                      color: '#1B1E1E',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: 'yellow',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#1B1E1E',
                      },
                      '&:hover fieldset': {
                        borderColor: '#1B1E1E',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'secondary.main',
                      },
                    },
                    '& .MuiInputBase-root': {
                      color: '#1B1E1E',
                    },
                  }}
                />
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
                }}
              >
                <TextField
                  id='outlined-basic'
                  label='Email *'
                  variant='outlined'
                  sx={{
                    width: '90%',
                    '& label.Mui-focused': {
                      color: '#1B1E1E',
                    },
                    '& .MuiFormLabel-root': {
                      color: '#1B1E1E',
                    },
                    '& .MuiFormLabel-root.Mui-focused': {
                      color: '#1B1E1E',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: 'yellow',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#1B1E1E',
                      },
                      '&:hover fieldset': {
                        borderColor: '#1B1E1E',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'secondary.main',
                      },
                    },
                    '& .MuiInputBase-root': {
                      color: '#1B1E1E',
                    },
                  }}
                />
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
                }}
              >
                <TextField
                  id='outlined-basic'
                  label='Phone Number *'
                  variant='outlined'
                  sx={{
                    width: '90%',
                    '& label.Mui-focused': {
                      color: '#1B1E1E',
                    },
                    '& .MuiFormLabel-root': {
                      color: '#1B1E1E',
                    },
                    '& .MuiFormLabel-root.Mui-focused': {
                      color: '#1B1E1E',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: 'yellow',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#1B1E1E',
                      },
                      '&:hover fieldset': {
                        borderColor: '#1B1E1E',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'secondary.main',
                      },
                    },
                    '& .MuiInputBase-root': {
                      color: '#1B1E1E',
                    },
                  }}
                />
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
                  borderRadius: '15px',
                }}
              >
                <TextField
                  id='outlined-basic'
                  label='How Can We Help?'
                  variant='outlined'
                  sx={{
                    width: '90%',
                    '& label.Mui-focused': {
                      color: '#1B1E1E',
                    },
                    '& .MuiFormLabel-root': {
                      color: '#1B1E1E',
                    },
                    '& .MuiFormLabel-root.Mui-focused': {
                      color: '#1B1E1E',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottomColor: 'yellow',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#1B1E1E',
                      },
                      '&:hover fieldset': {
                        borderColor: '#1B1E1E',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'secondary.main',
                      },
                    },
                    '& .MuiInputBase-root': {
                      color: '#1B1E1E',
                    },
                  }}
                />
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
                  borderRadius: '15px',
                }}
              >
                <HomeHeaderButton />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            width: {
              xl: '47%',
              lg: '47%',
              md: '47%',
              sm: '90%',
              xs: '100%',
            },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'start',
            gap: '1em',
          }}
        >
          <Typography
            variant='h3'
            sx={{ color: 'secondary.main', width: '80%', textAlign: 'left' }}
          >
            ADDRESS
          </Typography>
          <Box
            sx={{
              height: 'auto',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'start',
              paddingBottom: '2em',
              borderBottom: '2px solid black',
            }}
          >
            <Typography
              variant='p'
              sx={{
                color: 'secondary.main',
                width: '80%',
                textAlign: 'left',
                fontWeight: 'bold',
              }}
            >
              The Armoury Coaching Studio LTD
            </Typography>
            <Typography
              variant='p'
              sx={{ color: 'secondary.main', width: '80%', textAlign: 'left' }}
            >
              Victory Ct
            </Typography>
            <Typography
              variant='p'
              sx={{ color: 'secondary.main', width: '80%', textAlign: 'left' }}
            >
              Bletchley
            </Typography>
            <Typography
              variant='p'
              sx={{ color: 'secondary.main', width: '80%', textAlign: 'left' }}
            >
              Milton Keynes
            </Typography>
            <Typography
              variant='p'
              sx={{ color: 'secondary.main', width: '80%', textAlign: 'left' }}
            >
              MK1 1EW
            </Typography>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28144.803340179373!2d-82.3343366!3d28.1434311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b6eb09dcc495%3A0x3f530dde20072124!2sKingshyre%20At%20Cross%20Creek!5e0!3m2!1sen!2sus!4v1719492785736!5m2!1sen!2sus'
              width='100%'
              height='200'
              style={{ border: '0', marginTop: '1em' }}
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
          </Box>
          <Box
            sx={{
              height: 'auto',
              width: '100%',
              display: 'flex',
              alignItems: {
                xl: 'center',
                lg: 'center',
                md: 'start',
                sm: 'start',
                xs: 'start',
              },
              justifyContent: 'space-between',
              marginTop: '1em',
              flexDirection: {
                xl: 'row',
                lg: 'row',
                md: 'column',
                sm: 'column',
                xs: 'column',
              },
            }}
          >
            <Box
              sx={{
                width: '42%',
                height: { xl: '10vh', lg: '10vh', md: 'auto' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'start',
                gap: '1em',
              }}
            >
              <Typography
                variant='h3'
                sx={{
                  color: 'secondary.main',
                  width: '100%',
                  textAlign: 'left',
                }}
              >
                TELEPHONE
              </Typography>
              <Typography
                variant='p'
                sx={{
                  color: 'secondary.main',
                  width: '100%',
                  textAlign: 'left',
                }}
              >
                Call or text our Coaches Mobile directly on 07897 019085
              </Typography>
            </Box>
            <Box
              sx={{
                width: '40%',
                height: { xl: '10vh', lg: '10vh', md: 'auto' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'start',
                gap: '1em',
              }}
            >
              <Typography
                variant='h3'
                sx={{
                  color: 'secondary.main',
                  width: '80%',
                  textAlign: 'left',
                  marginTop: {
                    xl: '0px',
                    lg: '0px',
                    md: '0px',
                    sm: '1em',
                    xs: '1em',
                  },
                }}
              >
                EMAIL
              </Typography>
              <Typography
                variant='p'
                sx={{
                  color: 'secondary.main',
                  width: '100%',
                  textAlign: 'left',
                }}
              >
                lewis@armourycoaching.com
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
