import React, { useState } from 'react';
import axios from 'axios';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import LinearProgress from '@material-ui/core/LinearProgress';
import './form.css';
import { Grid } from '@material-ui/core';

const formStyle = {
  marginTop: '1em',
  alignItems: 'center',
};
const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '#2D3134',
  color: '#FFFFFF',
};
const normalise = (value) => ((value - 0) * 100) / (240 - 0);

function Form({ group }) {
  const [name, setName] = useState('');
  const [currentCount, setcurrentCount] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(currentCount);
    axios
      .post('http://localhost:3001/update', {
        name,
        currentCount,
      })
      .then((res) => {
        console.log(res.response);
      })
      .catch((error) => {
        console.log(error.response);
      });
    window.location.href = '/';
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className="cardContainer">
        <Card style={divStyle}>
          <CardHeader title={group.name} />
          <span id="count">{group.currentCount}/240</span>
        </Card>
        <LinearProgress
          variant="determinate"
          value={normalise(group.currentCount)}
          color="primary"
        />
        <Card style={divStyle}>
          <Grid container spacing={3} style={formStyle}>
            <Grid item xs={2} id="grid">
              <Typography>Name</Typography>
            </Grid>
            <Grid item xs={6} md={4} id="grid">
              <input
                type="text"
                name="name"
                placeholder={group.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={2} id="grid">
              <Typography>Current Count</Typography>
            </Grid>
            <Grid item xs={1} id="grid">
              <Typography>{group.currentCount}</Typography>
            </Grid>
            <Grid item xs={3} id="grid" />
            <Grid item xs={2} id="grid">
              <Typography>Max Count</Typography>
            </Grid>
            <Grid item xs={6} md={4} id="grid">
              <input
                type="number"
                name="currentCount"
                placeholder={group.currentCount}
                value={group.currentCount}
                onChange={(e) => setcurrentCount(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} id="grid">
              <Button
                type="submit"
                color="primary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12} id="grid" />
          </Grid>
        </Card>
      </div>
    </form>
  );
}

export default Form;
