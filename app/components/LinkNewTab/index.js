/**
 *
 * LinkNewTab
 *
 */

import React, { memo } from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function LinkNewTab(props) {
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item>
        <Link href={props.href} target="_blank">
          {props.children ? props.children : props.href}
        </Link>
      </Grid>
      {/* <Grid item>
        <Link href={props.href} target="_blank">
          <OpenInNewIcon fontSize="small" />
        </Link>
      </Grid> */}
    </Grid>
  );
}

LinkNewTab.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default memo(LinkNewTab);
