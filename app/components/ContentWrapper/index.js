/**
 *
 * ContentWrapper
 *
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ContentWrapper(props) {
  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={10} sm={10} md={10}>
        {props.children}
      </Grid>
    </Grid>
  );
}

ContentWrapper.propTypes = {
  children: PropTypes.node,
};

export default ContentWrapper;
