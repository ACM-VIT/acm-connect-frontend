import React, { useState } from 'react';
import axios from 'axios';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button';
import './form.css';
import { Grid } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';

const formStyle = {
  marginTop: '1em',
  alignItems: 'center',
};

function Form() {
  const [name, setName] = useState('');
  const [currentCount, setcurrentCount] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(currentCount);
    axios
      .post(
        'http://localhost:3001/update', // add id
        {
          currentCount,
        }
      )
      .catch((error) => console.error(`Error: ${error}`));
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
            placeholder="name"
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
          <Switch
            name="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
            color="primary"
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
