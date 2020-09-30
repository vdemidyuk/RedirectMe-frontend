/**
 *
 * NewForm
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import getCopyLink from 'utils/getCopyLink';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';

import ContentWrapper from 'components/ContentWrapper';
import ContentBlock from 'components/ContentBlock';
import ContentHeading from 'components/ContentHeading';
import LinkToRedirect from 'components/LinkToRedirect';
import RenderField from 'components/RenderField';

import makeSelectNewForm from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

// import Typography from '@material-ui/core/Typography';
// import FileCopyIcon from '@material-ui/icons/FileCopy';

import { validate } from './validation';

const NewForm = props => {
  useInjectReducer({ key: 'newForm', reducer });
  useInjectSaga({ key: 'newForm', saga });

  const { handleSubmit } = props;

  useEffect(() => {
    props.initialize({ uri: 'http://' });
  }, []);

  const isError = props.submitError || false;
  const responseStatusCode =
    props.submitError &&
    props.submitError.response &&
    props.submitError.response.status;
  // const isValidationError = responseStatusCode === 400;
  const isResult =
    props.submitResult &&
    props.submitResult.link &&
    props.submitResult.link.length > 0;

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <ContentWrapper>
        <ContentBlock>
          <ContentHeading>
            {!isResult ? 'New Link' : 'Link Created!'}
          </ContentHeading>
        </ContentBlock>

        {isResult && (
          <Grid container spacing={2} alignItems="center" alignContent="center">
            <Grid item xs={12} sm={6} align="center">
              <CopyToClipboard text={getCopyLink(props.submitResult.shortCode)}>
                <button onClick={e => e.preventDefault()}>Copy Short Link</button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} sm={6} align="center">
              <LinkToRedirect go={props.submitResult.shortCode} />
            </Grid>
            <Grid item xs={12} sm={6} align="center">
              <CopyToClipboard text={getCopyLink(props.submitResult.link)}>
                <button onClick={e => e.preventDefault()}>Copy See Through Link</button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} sm={6} align="center">
              <LinkToRedirect go={props.submitResult.link} />
            </Grid>

            <Grid item xs={12} align="center">
              <Button
                type="button"
                variant="outlined"
                onClick={props.handleNewLink}
              >
                Make a new one
              </Button>
            </Grid>
          </Grid>
        )}

        {!isResult && (
          <Grid container spacing={2} alignItems="center" alignContent="center">
            <Grid item xs={4} sm={6} align="right" style={{paddingRight: '2em'}}>
              <InputLabel htmlFor="uri">URI</InputLabel>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Field
                autoComplete="off"
                className="input"
                label="URL or scheme:path"
                name="uri"
                id="uri"
                component={RenderField}
                type="text"
                placeholder="URI"
              />
            </Grid>
            <Grid item xs={12} />
            <Grid item xs={4} sm={6} />
            <Grid item xs={8} sm={6}>
              <FormControl error={isError}>
                {isError && responseStatusCode !== 400 && (
                  <FormHelperText>Error occurred</FormHelperText>
                )}
                <Button type="submit" variant="outlined">
                  Create
                </Button>
              </FormControl>
            </Grid>
          </Grid>
        )}
      </ContentWrapper>
    </form>
  );
};

NewForm.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // onSubmit: PropTypes.func.isRequired,
  submitResult: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
    .isRequired,
  submitError: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
    .isRequired,
  handleNewLink: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialize: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  newForm: makeSelectNewForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  reduxForm({ form: 'newForm', validate }),
  withConnect,
  memo,
)(NewForm);
