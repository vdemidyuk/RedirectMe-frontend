/**
 *
 * Asynchronously loads the component for GoPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
