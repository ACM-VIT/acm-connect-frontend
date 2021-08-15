import React, { useState } from 'react';
import axios from 'axios';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button';
import './form.css';
import { Grid } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

const formStyle = {
  marginTop: '1em',
  alignItems: 'center',
};

function Form() {
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
      <Grid container style={formStyle}>
        <Grid item xs={12} md={4} id="grid">
          <input
            type="text"
            name="name"
            placeholder="current name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4} id="grid">
          <input
            type="number"
            name="currentCount"
            placeholder="count"
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
    </form>
  );
}

export default Form;
