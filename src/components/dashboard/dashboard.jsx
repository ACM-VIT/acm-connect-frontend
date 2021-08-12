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
    fetch('http://localhost:8000/groups')
      .then((res) => res.json())
      .then((data) => setGroups(data));
  }, []);

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
            {groups.map((group) => (
              <Grid item xs={12}>
                <NoteCard group={group} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;
