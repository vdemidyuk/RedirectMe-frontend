import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the goPage state domain
 */

const selectGoPageDomain = state => state.goPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by GoPage
 */

const makeSelectGoPage = () =>
  createSelector(
    selectGoPageDomain,
    substate => substate,
  );

const makeSelectGo = () =>
  createSelector(
    selectGoPageDomain,
    substate => substate.go,
  );

const makeSelectGoResult = () =>
  createSelector(
    selectGoPageDomain,
    substate => substate.goResult,
  );

const makeSelectGoError = () =>
  createSelector(
    selectGoPageDomain,
    substate => substate.goError,
  );

export default makeSelectGoPage;
export {
  selectGoPageDomain,
  makeSelectGo,
  makeSelectGoResult,
  makeSelectGoError,
};
