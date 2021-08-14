import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Footer from '../Footer/footer';

const useStyles = makeStyles(() => {});

const landing = () => {
  const classes = useStyles();
  return (
    <div>
      <Footer />
    </div>
  );
};

export default landing;
