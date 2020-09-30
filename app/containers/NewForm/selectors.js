import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the newForm state domain
 */

const selectNewFormDomain = state => state.newForm || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by NewForm
 */

const makeSelectNewForm = () =>
  createSelector(
    selectNewFormDomain,
    substate => substate,
  );

export default makeSelectNewForm;
export { selectNewFormDomain };
