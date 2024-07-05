import Button from '@mui/material/Button';

const HomeHeaderButton = (props) => (
  <Button
    variant='contained'
    sx={{
      backgroundColor: 'info.main',
      color: 'primary.main',
      padding: '1em',
      width: '90%',
      '&:hover': {
        backgroundColor: 'info.main',
      },
    }}
  >
    Claim Your Trail Training Session!
  </Button>
);

const HomeHeaderDarkButton = (props) => (
  <Button
    variant='contained'
    sx={{
      backgroundColor: 'secondary.main',
      color: 'primary.main',
      padding: '.5em',
      width: '150px',
      borderStyle: 'solid',
      borderWidth: '3px',
      borderColor: 'primary.main',
      borderRadius: '25px',
      '&:hover': {
        backgroundColor: 'secondary.light',
      },
    }}
  >
    Start Here
  </Button>
);

const HomeHeaderLightButton = (props) => (
  <Button
    variant='contained'
    sx={{
      backgroundColor: 'info.main',
      color: 'primary.main',
      padding: '.5em',
      width: '150px',
      borderStyle: 'solid',
      borderWidth: '3px',
      borderColor: 'primary.main',
      borderRadius: '25px',
      '&:hover': {
        backgroundColor: 'info.light',
      },
    }}
  >
    Start Here
  </Button>
);

const HomeTestimonialButton = (props) => (
  <Button
    variant='contained'
    sx={{
      backgroundColor: 'primary.main',
      color: 'secondary.main',
      padding: '.5em',
      width: '200px',
      borderStyle: 'solid',
      borderWidth: '3px',
      borderColor: 'primary.main',
      borderRadius: '25px',
      '&:hover': {
        backgroundColor: 'secondary.main',
        color: 'primary.main',
      },
    }}
  >
    Read More Stories
  </Button>
);

const HomeMissionButton = (props) => (
  <Button
    variant='contained'
    sx={{
      backgroundColor: 'secondary.main',
      color: 'primary.main',
      padding: '.5em',
      width: '200px',
      borderStyle: 'solid',
      borderWidth: '3px',
      borderColor: 'secondary.main',
      borderRadius: '25px',
      '&:hover': {
        backgroundColor: 'primary.main',
        color: 'secondary.main',
      },
    }}
  >
    Read More Stories
  </Button>
);

export {
  HomeHeaderButton,
  HomeHeaderDarkButton,
  HomeHeaderLightButton,
  HomeTestimonialButton,
  HomeMissionButton,
};
