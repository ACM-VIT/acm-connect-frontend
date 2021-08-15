import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import LinearProgress from '@material-ui/core/LinearProgress';
import CardHeader from '@material-ui/core/CardHeader';
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

const normalise = (value) => ((value - 0) * 100) / (240 - 0);

function Cards({ group }) {
  const [showEditButton, setShowEditButton] = useState(false);

  return (
    <div className="cardContainer">
      {showEditButton && <Editform group={group} />}
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
    </div>
  );
}

export default Cards;
