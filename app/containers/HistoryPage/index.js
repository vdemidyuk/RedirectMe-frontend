/**
 *
 * HistoryPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link as RouterLink } from 'react-router-dom';

import Lockr from 'lockr';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import LinkToRedirect from 'components/LinkToRedirect';
import ContentWrapper from 'components/ContentWrapper';
import ContentBlock from 'components/ContentBlock';
// import ContentHeading from 'components/ContentHeading';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import getCopyLink from 'utils/getCopyLink';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHistoryPage, {
  makeSelectNewLinkFlag,
  makeSelectLinks,
  makeSelectStorageInitializedFlag,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import {
  resetNewLinkFlagAction,
  storageInitializedFlagAction,
  resetStorageAction,
} from './actions';

export const HistoryPage = props => {
  useInjectReducer({ key: 'historyPage', reducer });
  useInjectSaga({ key: 'historyPage', saga });

  useEffect(() => {
    if (!props.storageInitializedFlag) {
      Lockr.prefix = 'redirectme_';
      const links = Lockr.get('links', []);
      props.handleStorageInitializedFlag(links);
    }
  }, []);

  useEffect(() => {
    if (props.newLinkFlag) {
      Lockr.set('links', props.links);
      props.handleResetNewLinkFlagAction();
    }
  });

  const isLinks = props.links && props.links.length > 0;
  const links = isLinks && [...props.links].reverse();
  if (links) {
    /* eslint-disable no-return-assign, no-param-reassign */
    // keys for index
    links.forEach((v, i) => (v.keyIndex = i + 1));
    /* eslint-enable no-return-assign, no-param-reassign */
  }

  return (
    <React.Fragment>
      {props.isVisibleHistory && (
        <ContentWrapper>
          {/* <React.Fragment> */}

          <ContentBlock>
            <Typography variant="h4" align="center">
              History
            </Typography>
            {isLinks && (
              <Button
                style={{ float: 'right', margin: '1em' }}
                type="button"
                variant="outlined"
                onClick={props.handleResetStorageAction}
              >
                Clear History
              </Button>
            )}
          </ContentBlock>

          <Grid container spacing={2} alignItems="center" alignContent="center">
            {isLinks &&
              links.map((el, i) => {
                return (
                  <Grid
                    key={el.keyIndex}
                    item
                    xs={12}
                    align="center"
                    style={{
                      backgroundColor: i % 2 === 0 ? '#fff' : '#fafafa',
                    }}
                  >
                    <Grid container>
                      <Grid item xs={9}>
                        <LinkToRedirect go={el.link}>{el.link}</LinkToRedirect>
                      </Grid>
                      <Grid item xs={3} align="right">
                        <CopyToClipboard text={getCopyLink(el.shortCode)}>
                          <button onClick={e => e.preventDefault()}>Copy Link</button>
                        </CopyToClipboard>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}

            {!isLinks && (
              <React.Fragment>
                <Grid item xs={12} align="center">
                  <Typography variant="h5" color="textSecondary" align="center">
                    You have no links.
                  </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                  <Button
                    to="/"
                    component={RouterLink}
                    type="button"
                    variant="outlined"
                    onClick={props.handleResetStorageAction}
                  >
                    Create New Link
                  </Button>
                </Grid>
              </React.Fragment>
            )}
          </Grid>
        </ContentWrapper>
        // </React.Fragment>
      )}
    </React.Fragment>
  );
};

HistoryPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  handleResetNewLinkFlagAction: PropTypes.func.isRequired,
  newLinkFlag: PropTypes.bool.isRequired,
  links: PropTypes.array.isRequired,
  storageInitializedFlag: PropTypes.bool.isRequired,
  handleStorageInitializedFlag: PropTypes.func.isRequired,
  isVisibleHistory: PropTypes.bool.isRequired,
  handleResetStorageAction: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  historyPage: makeSelectHistoryPage(),
  newLinkFlag: makeSelectNewLinkFlag(),
  links: makeSelectLinks(),
  storageInitializedFlag: makeSelectStorageInitializedFlag(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleResetNewLinkFlagAction: () => {
      dispatch(resetNewLinkFlagAction());
    },
    handleStorageInitializedFlag: links => {
      dispatch(storageInitializedFlagAction(links));
    },
    handleResetStorageAction: () => {
      dispatch(resetStorageAction());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HistoryPage);
