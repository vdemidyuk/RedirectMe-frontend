/**
 *
 * HomePage
 *
 */

import React,{useEffect} from 'react'; // , { useEffect }
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { reset } from 'redux-form';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Layout from 'components/Layout';
import HelmetHeader from 'components/HelmetHeader';
import HistoryPage from 'containers/HistoryPage/Loadable';
import NewForm from 'containers/NewForm';

import { linkSubmitAction, linkNewAction } from './actions';
import makeSelectHomePage, {
  makeSelectLink,
  makeSelectLinkSubmitError,
  makeSelectLinkSubmitResult,
  makeSelectLinkSubmitting,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import ReactGA from 'react-ga';

export const HomePage = props => {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  const handleSignIn = values => {
    props.dispatch(linkSubmitAction(values));
    return false;
  };

  useEffect(() => {
    ReactGA.pageview('/homepage');
  });

  const isVisibleHistory =
    (props.location &&
      props.location.pathname &&
      props.location.pathname === '/history') ||
    false;

  return (
    <React.Fragment>
      <HelmetHeader />

      <Layout handleNewLink={props.handleNewLink}>
        <HistoryPage
          location={props.location}
          isVisibleHistory={isVisibleHistory}
        />

        {!isVisibleHistory && (
          <NewForm
            onSubmit={handleSignIn}
            submitResult={props.submitResult}
            submitError={props.submitError}
            handleNewLink={props.handleNewLink}
          />
        )}
      </Layout>
    </React.Fragment>
  );
};

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // link: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  // submitting: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
  // .isRequired,
  submitResult: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
    .isRequired,
  submitError: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
    .isRequired,
  handleNewLink: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  link: makeSelectLink(),
  submitting: makeSelectLinkSubmitting(),
  submitResult: makeSelectLinkSubmitResult(),
  submitError: makeSelectLinkSubmitError(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleNewLink: () => {
      dispatch(linkNewAction());
      dispatch(reset('newForm'));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
