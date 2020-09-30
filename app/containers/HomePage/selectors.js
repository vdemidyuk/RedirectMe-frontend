import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.homePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate,
  );

const makeSelectLinkSubmitting = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.submitting,
  );

const makeSelectLinkSubmitResult = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.submitResult,
  );

const makeSelectLinkSubmitError = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.submitError,
  );

const makeSelectLink = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.link,
  );

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSelectLinkSubmitting,
  makeSelectLinkSubmitResult,
  makeSelectLinkSubmitError,
  makeSelectLink,
};
