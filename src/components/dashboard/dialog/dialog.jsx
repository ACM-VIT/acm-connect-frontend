import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Switch from '@material-ui/core/Switch';
import './dialog.css';
import { Grid, createTheme, ThemeProvider } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

const themee = createTheme({
  overrides: {
    MuiSwitch: {
      switchBase: {
        color: '#25D366',
      },
      colorPrimary: {
        '&$checked': {
          color: '#25D366',
        },
      },
      track: {
        opacity: 0.2,
        backgroundColor: '#fff',
        '$checked$checked + &': {
          opacity: 0.7,
          backgroundColor: '#25D366',
        },
      },
    },
  },
});
const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(1),
    bottom: '6rem',
    right: theme.spacing(6),
    position: 'fixed',
    [theme.breakpoints.down('sm')]: {
      margin: '0.25rem',
      right: '0',
    },
    [theme.breakpoints.up('md')]: {
      bottom: '4rem',
      right: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
      bottom: '5rem',
    },
  },
  confirm: {
    background: '#25D366',
    border: 0,
    borderRadius: 3,
    color: 'white',
    padding: '0 150px',
  },
  cancel: {
    background: '#000',
    border: 0,
    borderRadius: 3,
    color: 'white',
    padding: '0 155px',
  },
  label: {
    color: 'grey',
    textAlign: 'center',
  },
  inputcolor: {
    color: 'white',
  },
  root: {
    '& label.Mui-focused': {
      color: 'grey',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'grey',
    },
  },
}));

const formStyle = {
  marginTop: '1em',
  alignItems: 'center',
};

export default function FormDialog() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlereqClose = () => {
    if (
      !(
        currentCount === '' ||
        maxLimit === '' ||
        joiningLink === '' ||
        // eslint-disable-next-line radix
        parseInt(currentCount) > parseInt(maxLimit)
      )
    ) {
      setOpen(false);
    }
  };

  const [name, setName] = useState('');
  const [maxLimit, setmaxLimit] = useState('');
  const [currentCount, setCurrentCount] = useState('');
  const [joiningLink, setJoiningLink] = useState('');
  const [allowMore, setAllowMore] = useState(false);
  const token = sessionStorage.getItem('TK');
  const path = useLocation();
  const ty = path.search;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        process.env.REACT_APP_ADD_URL,
        {
          name,
          maxLimit,
          currentCount,
          joiningLink,
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
    <div>
      <Fab
        size="medium"
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={handleClickOpen}
        id="fab"
      >
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            backgroundColor: '#000',
          },
        }}
      >
        <DialogContent>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Grid container style={formStyle}>
              <Grid item xs={12} md={6} id="grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Group Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Grid>

              <Grid item xs={12} md={6} id="grid">
                <input
                  type="text"
                  name="joiningLink"
                  placeholder="Joining Link"
                  value={joiningLink}
                  onChange={(e) => setJoiningLink(e.target.value)}
                  required
                />
              </Grid>

              <Grid item xs={12} md={6} id="grid">
                <input
                  type="number"
                  name="maxLimit"
                  placeholder="Max Limit"
                  value={maxLimit}
                  onChange={(e) => setmaxLimit(e.target.value)}
                  required
                />
              </Grid>

              <Grid item xs={12} md={6} id="grid">
                <input
                  type="number"
                  name="currentCount"
                  placeholder="Current Count"
                  value={currentCount}
                  onChange={(e) => setCurrentCount(e.target.value)}
                  max={maxLimit}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6} id="grid" style={{ color: 'white' }}>
                Accepting responses?
              </Grid>
              <Grid item xs={12} md={6} id="grid">
                <ThemeProvider theme={themee}>
                  <Switch
                    name="allowMore"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    color="primary"
                    checked={allowMore}
                    onChange={(e) => setAllowMore(e.target.checked)}
                  />
                </ThemeProvider>
              </Grid>
            </Grid>

            <DialogContentText
              style={{ color: 'white', fontSize: 15, textAlign: 'center' }}
            >
              Create New Group?
            </DialogContentText>
            <DialogActions id="actions">
              <Button
                onClick={handlereqClose}
                className={classes.confirm}
                type="submit"
              >
                Confirm
              </Button>
            </DialogActions>
          </form>
          <DialogActions id="actions">
            <Button
              onClick={handleClose}
              className={classes.cancel}
              type="submit"
            >
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}
