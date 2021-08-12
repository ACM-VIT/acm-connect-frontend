import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(1),
    position: 'absolute',
    bottom: theme.spacing(10),
    right: theme.spacing(6),
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

export default function FormDialog() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab
        size="small"
        color="primary"
        aria-label="add"
        style={{ background: '#25D366' }}
        className={classes.fab}
        onClick={handleClickOpen}
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
          <TextField
            margin="dense"
            id="name"
            className={classes.root}
            InputLabelProps={{
              className: classes.label,
            }}
            InputProps={{
              className: classes.inputcolor,
            }}
            label="Enter Group Name"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <DialogContentText
            style={{ color: 'white', fontSize: 15, textAlign: 'center' }}
          >
            Create New Group?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.confirm}>
            Confirm
          </Button>
        </DialogActions>
        <DialogActions>
          <Button onClick={handleClose} className={classes.cancel}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
