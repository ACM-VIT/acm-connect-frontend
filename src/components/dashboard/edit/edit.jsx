import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import './edit.css';

function Edit({ onAdd, group }) {
  return (
    <div>
      <span id="count">{group.currentCount}/240</span>
      <Fab size="small" color="primary" aria-label="add" id="editicon">
        <EditIcon onClick={onAdd} />
      </Fab>
    </div>
  );
}

export default Edit;
