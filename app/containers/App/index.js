/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';

import ReactGA from 'react-ga';

import HomePage from 'containers/HomePage/Loadable';
// import HistoryPage from 'containers/HistoryPage/Loadable';
import GoPage from 'containers/GoPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';


export default function App() {

  useEffect(() => {
    ReactGA.initialize(process.env.GA || '');
    ReactGA.pageview(window.location.pathname);
  })

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/history" component={HomePage} />
        <Route exact path="/go/:goLink" component={GoPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
