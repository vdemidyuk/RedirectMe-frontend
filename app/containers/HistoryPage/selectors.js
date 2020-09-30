import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the historyPage state domain
 */

const selectHistoryPageDomain = state => state.historyPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HistoryPage
 */

const makeSelectHistoryPage = () =>
  createSelector(
    selectHistoryPageDomain,
    substate => substate,
  );

const makeSelectNewLinkFlag = () =>
  createSelector(
    selectHistoryPageDomain,
    substate => substate.newLinkFlag,
  );

const makeSelectLinks = () =>
  createSelector(
    selectHistoryPageDomain,
    substate => substate.links,
  );

const makeSelectStorageInitializedFlag = () =>
  createSelector(
    selectHistoryPageDomain,
    substate => substate.storageInitializedFlag,
  );

export default makeSelectHistoryPage;
export {
  selectHistoryPageDomain,
  makeSelectNewLinkFlag,
  makeSelectLinks,
  makeSelectStorageInitializedFlag,
};
