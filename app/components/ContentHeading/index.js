/**
 *
 * ContentHeading
 *
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
  heading: {
    margin: '1em',
  },
}));

function ContentHeading(props) {
  const classes = useStyles();
  return (
    <Typography variant="h4" align="center" className={classes.heading}>
      {props.children}
    </Typography>
  );
}

ContentHeading.propTypes = {
  children: PropTypes.node,
};

export default ContentHeading;
