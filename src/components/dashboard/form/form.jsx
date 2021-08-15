import React, { useState } from 'react';
import axios from 'axios';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import './form.css';
import { Grid } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

const formStyle = {
  marginTop: '1rem',
  marginBottom: '1rem',
  alignItems: 'center',
};
const labelStyle = {
  marginLeft: '1.5rem',
};
const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '#2D3134',
  color: '#FFFFFF',
};
// const normalise = (value) => ((value - 0) * 100) / (240 - 0);

function Form({ group }) {
  const [name, setName] = useState('');
  const [currentCount, setcurrentCount] = useState('');
  const token = sessionStorage.getItem('TK');
  const path = useLocation();
  const ty = path.search;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(currentCount);
    axios
      .post(
        process.env.REACT_APP_UPDATE_URL,
        {
          name,
          currentCount,
        },
        {
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.response);
        window.location.href = `/dashboard${ty}`;
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div>
        <Card style={divStyle}>
          <Grid container style={formStyle}>
            <Grid item xs={1} id="grid" style={labelStyle}>
              <Typography>Name</Typography>
            </Grid>
            <Grid item xs={12} md={3} id="grid">
              <input
                type="text"
                name="name"
                placeholder={group.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={2} id="grid" style={labelStyle}>
              <Typography>Current Count</Typography>
            </Grid>
            <Grid item xs={12} md={3} id="grid">
              <input
                type="number"
                name="currentCount"
                placeholder="Current Count"
                value={currentCount}
                onChange={(e) => setcurrentCount(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={2} id="grid">
              <Button
                type="submit"
                color="primary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Card>
        <Divider />
      </div>
    </form>
  );
}

export default Form;
