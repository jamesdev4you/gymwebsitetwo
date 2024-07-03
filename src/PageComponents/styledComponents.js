import Button from '@mui/material/Button';

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

export { HomeHeaderDarkButton, HomeHeaderLightButton };
