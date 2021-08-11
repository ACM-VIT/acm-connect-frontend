import React, { useState } from 'react';
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
  return (
    <form action="/update" method="POST">
      <Grid container style={formStyle}>
        <Grid item xs={12} md={4} id="grid">
          <input type="text" name="name" placeholder="name" />
        </Grid>
        <Grid item xs={12} md={4} id="grid">
          <input type="number" name="currentCount" placeholder="count" />
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
