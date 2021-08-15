import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import ACMLogo from '../../images/ACM-logo.svg';
import VITLogo from '../../images/VIT-logo.svg';
import { ReactComponent as Facebook } from '../../images/facebook.svg';
import { ReactComponent as Twitter } from '../../images/twitter.svg';
import { ReactComponent as Instagram } from '../../images/instagram.svg';
import { ReactComponent as Medium } from '../../images/medium.svg';
import { ReactComponent as LinkedIn } from '../../images/linkedin.svg';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 315,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1247,
    },
  },
});

const useStyles = makeStyles((themes) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    height: 'inherit',
    width: 'inherit',
  },
  spacing: {
    paddingRight: themes.spacing(1),
  },
  flexBox: {
    display: 'flex',
  },
  align: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  alignFooter: {
    width: '100%',
    //  position: 'absolute',
    [theme.breakpoints.down('md')]: {
      // paddingTop: '14rem',
    },
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  hiddenMob: {
    position: 'fixed',
    bottom: 0,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  hiddenPc: {
    position: 'fixed',
    bottom: 0,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  padding5: {
    paddingBottom: 5,
  },
  padding10: {
    paddingBottom: 12,
  },
  bottom: {
    bottom: 0,
  },
}));

const footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.alignFooter}>
      {/* Desktop view */}
      <AppBar
        position="relative"
        className={classes.hiddenPc}
        style={{ background: '#000' }}
      >
        <Container>
          <Toolbar>
            <Link href="https://acmvit.in" target="_blank" rel="noreferrer">
              <img src={ACMLogo} alt="ACM Logo" />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile view */}
      <AppBar
        className={classes.hiddenMob}
        position="static"
        style={{ background: '#000' }}
      >
        <Container>
          <Toolbar className={classes.flex}>
            <Icon className={classes.root}>
              <Grid container direction="row" justifyContent="center">
                <Link
                  className={classes.spacing}
                  href="https://www.facebook.com/acmvitvellore/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook />
                </Link>
                <Link
                  className={classes.spacing}
                  href="https://twitter.com/ACM_VIT"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter />
                </Link>
                <Link
                  className={classes.spacing}
                  href="https://instagram.com/acmvit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram />
                </Link>
                <Link
                  className={classes.spacing}
                  href="https://medium.com/acmvit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Medium />
                </Link>
                <Link
                  className={classes.spacing}
                  href="https://www.linkedin.com/company/acm-vit-chapter/mycompany/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedIn />
                </Link>
              </Grid>
            </Icon>
            <Link
              className={classes.align}
              href="https://vit.ac.in"
              target="_blank"
              rel="noreferrer"
            >
              <img src={VITLogo} alt="VIT Logo" />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile view */}
      <AppBar
        position="relative"
        id="container"
        className={classes.hiddenMob}
        style={{ background: '#000' }}
      >
        <Container>
          <Toolbar className={classes.flex}>
            <Icon className={classes.root}>
              <Grid container direction="row" justifyContent="center">
                <Link
                  className={classes.spacing}
                  href="https://www.facebook.com/acmvitvellore/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook />
                </Link>
                <Link
                  className={classes.spacing}
                  href="https://twitter.com/ACM_VIT"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter />
                </Link>
                <Link
                  className={classes.spacing}
                  href="https://instagram.com/acmvit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram />
                </Link>
                <Link
                  className={classes.spacing}
                  href="https://medium.com/acmvit"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Medium />
                </Link>
                <Link
                  className={classes.spacing}
                  href="https://www.linkedin.com/company/acm-vit-chapter/mycompany/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedIn />
                </Link>
              </Grid>
            </Icon>
            <Grid
              className={classes.flexBox}
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Link
                className={classes.padding5}
                href="https://acmvit.in"
                target="_blank"
                rel="noreferrer"
              >
                <img src={ACMLogo} alt="ACM Logo" />
              </Link>
              <Link
                className={classes.padding10}
                href="https://vit.ac.in"
                target="_blank"
                rel="noreferrer"
              >
                <img src={VITLogo} alt="VIT Logo" />
              </Link>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default footer;
