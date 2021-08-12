import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    height: 'inherit',
    width: 'inherit',
    bottom: theme.spacing(4),
  },
  spacing: {
    paddingRight: theme.spacing(1),
  },
  flex: {
    display: 'flex',
  },
  align: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const footer = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" style={{ background: '#000' }}>
        <Container>
          <Toolbar>
            <Link href="https://acmvit.in" target="_blank" rel="noreferrer">
              <img src={ACMLogo} alt="ACM-logo" />
            </Link>
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
              <Link
                className={classes.align}
                href="https://vit.ac.in"
                target="_blank"
                rel="noreferrer"
              >
                <img src={VITLogo} alt="VIT-logo" />
              </Link>
            </Icon>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default footer;
