import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './landing.css';

import Footer from '../Footer/footer';

const useStyles = makeStyles((theme) => ({
  header: {
    color: '#fff',
    fontWeight: 600,
    padding: '15px 0px 0px 50px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      padding: '0px 0px 0px 0px',
      marginTop: '0px',
      paddingTop: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      padding: '0px 0px 0px 0px',
      marginTop: '0px',
      paddingTop: '2rem',
    },
  },
  flex: {
    display: 'flex',
    alignContent: 'center',
  },
  text1: {
    color: '#fff',
    fontWeight: 600,
    fontSize: 48,
    [theme.breakpoints.down('md')]: {
      fontSize: 45,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 40,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 30,
    },
  },
  text2: {
    color: '#25D366',
    fontWeight: 600,
    paddingLeft: 10,
    fontSize: 48,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: 45,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 40,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 30,
    },
  },
  button: {
    fontSize: 15,
    backgroundColor: '#25D366',
    color: '#fff',
    borderRadius: 8,
    marginTop: 20,
    padding: '5px 55px 5px 55px',
    '&:hover': {
      backgroundColor: '#13ed67',
      color: '#fff',
    },
  },
  hiddenMob: {
    position: 'fixed',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  hiddenPc: {
    position: 'fixed',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

const landing = () => {
  const classes = useStyles();
  const loginHandler = (event) => {
    event.preventDefault();
    window.open(process.env.REACT_APP_AUTH, '_self');
  };
  return (
    <div id="background">
      <Typography className={classes.header} variant="h5">
        WhatsApp Group Manager
      </Typography>
      <Grid
        container
        direction="column"
        spacing={0}
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '82vh' }}
      >
        <Grid container direction="row" justifyContent="center">
          <Typography className={classes.text1}>ACM-VIT</Typography>
          <Typography className={classes.text2}>
            WhatsApp Group Manager
          </Typography>
        </Grid>
        <Button
          onClick={loginHandler}
          className={classes.button}
          variant="contained"
        >
          Login
        </Button>
      </Grid>
      <Footer />
    </div>
  );
};

export default landing;
