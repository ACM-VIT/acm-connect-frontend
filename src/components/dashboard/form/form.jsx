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
import Switch from '@material-ui/core/Switch';
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

function Form({ group }) {
  const [joiningLink, setJoiningLink] = useState('');
  const [currentCount, setcurrentCount] = useState('');
  const [maxLimit, setMaxLimit] = useState('');
  const [allowMore, setAllowMore] = useState(true);
  const [name, setName] = useState('');

  const token = sessionStorage.getItem('TK');
  const path = useLocation();
  const ty = path.search;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        process.env.REACT_APP_UPDATE_URL,
        {
          name: group.name,
          joiningLink,
          currentCount,
          maxLimit,
          allowMore,
        },
        {
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        window.location.href = '/dashboard';
      })
      .catch((error) => {});
    axios
      .get(process.env.REACT_APP_MEMORY_URL, {
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {})
      .catch((error) => {});
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div>
        <Card style={divStyle}>
          <Grid container spacing={1} style={formStyle}>
            <Grid item xs={3} sm={1} md={2} xl={2} id="grid" style={labelStyle}>
              <Typography>Allow More</Typography>
            </Grid>
            <Grid item xs={7} sm={3} md={3} xl={3} id="grid">
              <Switch
                name="allowMore"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                color="primary"
                checked={allowMore}
                onChange={(e) => setAllowMore(e.target.checked)}
              />
            </Grid>
            <Grid item xs={3} sm={3} md={2} xl={2} id="grid" style={labelStyle}>
              <Typography>Current Count</Typography>
            </Grid>
            <Grid item xs={7} sm={3} md={3} xl={3} id="grid">
              <input
                type="number"
                name="currentCount"
                placeholder="Current Count"
                value={currentCount}
                onChange={(e) => setcurrentCount(e.target.value)}
                max={maxLimit}
                required
              />
            </Grid>
            <Grid item xs={3} sm={1} md={2} xl={2} id="grid" style={labelStyle}>
              <Typography>Group Link</Typography>
            </Grid>
            <Grid item xs={7} sm={3} md={3} xl={3} id="grid">
              <input
                type="text"
                name="joiningLink"
                placeholder="Group Link"
                value={joiningLink}
                onChange={(e) => setJoiningLink(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={3} sm={3} md={2} xl={2} id="grid" style={labelStyle}>
              <Typography>Max Count</Typography>
            </Grid>
            <Grid item xs={7} sm={3} md={3} xl={3} id="grid">
              <input
                type="number"
                name="maxLimit"
                placeholder="Max Count"
                value={maxLimit}
                onChange={(e) => setMaxLimit(e.target.value)}
                required
              />
            </Grid>
            <Grid item spacing={2} xs={12} md={12} id="grid">
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
