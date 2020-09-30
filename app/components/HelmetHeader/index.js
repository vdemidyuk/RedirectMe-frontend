/**
 *
 * HelmetHeader
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function HelmetHeader() {
  return (
    <Helmet>
      <title>Redirect Me Online</title>
      <meta name="description" content="redirect me online" />
    </Helmet>
  );
}

HelmetHeader.propTypes = {};

export default memo(HelmetHeader);
