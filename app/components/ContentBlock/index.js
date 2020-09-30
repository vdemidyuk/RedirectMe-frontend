/**
 *
 * ContentBlock
 *
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ContentBlock(props) {
  const { children, ...rest } = props;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} {...rest}>
        {props.children}
      </Grid>
    </Grid>
  );
}

ContentBlock.propTypes = {
  children: PropTypes.node,
};

export default ContentBlock;
