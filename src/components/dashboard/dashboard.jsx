import axios from 'axios';
/* eslint-disable react/jsx-key */
import './dashboard.css';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';

import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';

import NoteCard from './cards/cards';
import Footer from '../Footer/footer';
import Dialog from './dialog/dialog';

const UseStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    paddingRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
  },
}));
const Dashboard = () => {
  const classes = UseStyles();
  const [groups, setGroups] = useState([]);
  const path = useLocation();
  console.log(path);
  useEffect(() => {
    const token = path.search.slice(7);
    console.log(token);
    if (path.search.substring(1, 6) === 'token') {
      sessionStorage.setItem('TK', token);
    }
    if (
      sessionStorage.getItem('TK') === null ||
      sessionStorage.getItem('TK') === ''
    ) {
      window.location.href = '/';
    } else {
      axios
        .get(process.env.REACT_APP_GET_URL, {
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const something = response.data;
          setGroups(something.arr);
        })
        .catch((error) => console.error(`Error: ${error}`));
    }
  }, []);
  const logout = () => {
    console.log('logout');
    sessionStorage.removeItem('TK');
    window.location.href = '/';
  };

  return (
    <div>
      <header className={classes.root}>
        <AppBar position="static">
          <Toolbar style={{ background: '#075E54' }}>
            <Typography variant="h6" className={classes.title}>
              ACM
            </Typography>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <Container>
          <Grid container>
            {groups.map((group) => (
              <Grid item xs={12}>
                <NoteCard group={group} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Dialog />
      <Footer />
    </div>
  );
};

export default Dashboard;
