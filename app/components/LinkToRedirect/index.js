/**
 *
 * LinkToRedirect
 *
 */

import React, { memo } from 'react';
import LinkNewTab from 'components/LinkNewTab';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function LinkToRedirect(props) {
  return (
    <LinkNewTab
      href={`${window.location.origin}/go/${encodeURIComponent(props.go)}`}
    >
      {props.children}
    </LinkNewTab>
  );
}

LinkToRedirect.propTypes = {
  go: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default memo(LinkToRedirect);
