import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import LinearProgress from '@material-ui/core/LinearProgress';
import CardHeader from '@material-ui/core/CardHeader';
import { Grid } from '@material-ui/core';
import Editform from '../form/form';
import EditButton from '../edit/edit';
import './cards.css';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '#2D3134',
  color: '#FFFFFF',
};

function Cards({ group }) {
  const [showEditButton, setShowEditButton] = useState(false);
  const limit = group.maxLimit;
  const normalise = (value) => ((value - 0) * 100) / (limit - 0);
  return (
    <Grid className="cardContainer">
      <Card style={divStyle}>
        <CardHeader title={group.name} />

        <EditButton
          onAdd={() => setShowEditButton(!showEditButton)}
          showAdd={showEditButton}
          group={group}
        />
      </Card>
      <LinearProgress
        variant="determinate"
        value={normalise(group.currentCount)}
        color="primary"
      />
      {showEditButton && <Editform group={group} />}
    </Grid>
  );
}

export default Cards;
