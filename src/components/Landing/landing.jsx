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
    fontFamily: 'Helvetica Neue',
    padding: '15px 0px 0px 50px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      padding: '0px 0px 0px 0px',
      marginTop: '20px',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      padding: '0px 0px 0px 0px',
      marginTop: '20px',
    },
  },
  flex: {
    display: 'flex',
    alignContent: 'center',
  },
  text1: {
    color: '#fff',
    fontWeight: 600,
    fontFamily: 'Helvetica Neue',
    fontSize: 48,
    [theme.breakpoints.down('md')]: {
      fontSize: 45,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 40,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 35,
    },
  },
  text2: {
    color: '#25D366',
    fontWeight: 600,
    fontFamily: 'Helvetica Neue',
    paddingLeft: 9,
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
  marginTop: {
    marginTop: '11rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '15rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '13rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '12rem',
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
      backgroundColor: '#16de63',
      color: '#fff',
    },
  },
}));

const landing = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.header} variant="h5">
        WhatsApp Group Manager
      </Typography>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          className={classes.marginTop}
          container
          direction="row"
          justifyContent="center"
        >
          <Typography className={classes.text1}>ACM-VIT</Typography>
          <Typography className={classes.text2}>
            WhatsApp Group Manager
          </Typography>
        </Grid>
        <Button className={classes.button} variant="contained">
          Login
        </Button>
      </Grid>
      <Footer />
    </div>
  );
};

export default landing;
