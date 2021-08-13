import axios from 'axios';
/* eslint-disable react/jsx-key */
import './dashboard.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

  useEffect(() => {
    axios
      .get('http://localhost:3001/display', {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response);
        const something = response.data;
        console.log(typeof something);
        console.log(something.arr);
        setGroups(something.arr);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  // useEffect(() => {
  //   fetch('http://localhost:8000/groups')
  //     .then((res) =>
  //       // console.log(res);
  //       res.json()
  //     )
  //     .then((data) =>
  //       // console.log(typeof data);
  //       setGroups(data)
  //     );
  // }, []);

  return (
    <div>
      <header className={classes.root}>
        <AppBar position="static">
          <Toolbar style={{ background: '#128C7E' }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              ACM
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <Container>
          <Grid container>
            {/* for (const group in groups)
            {
              <Grid item xs={12}>
                <NoteCard group={group} />
              </Grid>
            } */}
            {/* {Object.entries(groups).map((group) => (
              <Grid item xs={12}>
                <NoteCard group={group} />
              </Grid>
            ))} */}
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
