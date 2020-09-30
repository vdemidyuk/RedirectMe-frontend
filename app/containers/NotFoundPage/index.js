/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Layout from 'components/Layout';
import HelmetHeader from 'components/HelmetHeader';
import ContentWrapper from 'components/ContentWrapper';
import ContentBlock from 'components/ContentBlock';

import messages from './messages';

export default function NotFound() {
  return (
    <React.Fragment>
      <HelmetHeader />
      <Layout>
        <ContentWrapper>
          <ContentBlock align="center">
            <FormattedMessage {...messages.header} />
          </ContentBlock>
        </ContentWrapper>
      </Layout>
    </React.Fragment>
  );
}
