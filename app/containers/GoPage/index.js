/**
 *
 * GoPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Layout from 'components/Layout';
import ContentWrapper from 'components/ContentWrapper';
import ContentBlock from 'components/ContentBlock';
import ContentHeading from 'components/ContentHeading';
import HelmetHeader from 'components/HelmetHeader';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectGoPage, {
  makeSelectGoError,
  makeSelectGoResult,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import { goAction } from './actions';

export function GoPage(props) {
  useInjectReducer({ key: 'goPage', reducer });
  useInjectSaga({ key: 'goPage', saga });

  useEffect(() => {
    if (
      props.match &&
      props.match.params &&
      props.match.params.goLink &&
      props.match.params.goLink.length > 0 &&
      !props.goResult &&
      !props.goError
    ) {
      props.handleGo(decodeURIComponent(props.match.params.goLink));
    }
  }, []);

  // useEffect(() => {
  //   console.log('GoPage render', props);
  // });

  const isResult =
    props.goResult &&
    props.goResult.link &&
    props.goResult.happyRedirecting === true;
  const isBanned =
    props.goResult && props.goResult.link && props.goResult.isBanned === true;
  const isError = props.goError;
  const is400 =
    isError && props.goError.response && props.goError.response.status === 400;
  const redirectContentParam = isResult && `3; URL=${props.goResult.link}`;

  return (
    <React.Fragment>
      <HelmetHeader />
      <Layout>
        <ContentWrapper>
          {!isResult && !isError && (
            <ContentBlock>
              <ContentHeading>Loading...</ContentHeading>
            </ContentBlock>
          )}

          {isError && (
            <Grid container spacing={2}>
              {!is400 && !isBanned && (
                <Grid item xs={12}>
                  <Typography variant="h4" color="error" align="center">
                    Something went wrong.
                  </Typography>
                </Grid>
              )}
              {is400 && (
                <Grid item xs={12}>
                  <Typography variant="h4" align="center">
                    Link not found.
                  </Typography>
                </Grid>
              )}
              {isBanned && (
                <Grid item xs={12}>
                  <Typography variant="h4" align="center">
                    Link is banned.
                  </Typography>
                  <Typography variant="h4" color="textSecondary" align="center">
                    No redirect for you today, sowry.
                  </Typography>
                </Grid>
              )}
            </Grid>
          )}

          {isResult && (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4" align="center">
                  You will now be redirected.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" color="textSecondary" align="center">
                  If it ain&apos;t happening, click{' '}
                  <Link href={props.goResult.link}>here.</Link>
                  <meta httpEquiv="refresh" content={redirectContentParam} />
                </Typography>
              </Grid>
            </Grid>
          )}
        </ContentWrapper>
      </Layout>
    </React.Fragment>
  );
}

GoPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  goResult: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  goError: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  handleGo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  goPage: makeSelectGoPage(),
  goResult: makeSelectGoResult(),
  goError: makeSelectGoError(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleGo: go => {
      dispatch(goAction(go));
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
)(GoPage);
