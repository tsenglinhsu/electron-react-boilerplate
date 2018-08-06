/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import USBPage from './containers/USBPage';
import NetworkPage from './containers/NetworkPage';
import CounterPage from './containers/CounterPage';
import DetailPage from './containers/DetailPage';
import ScrollToTop from './scrollToTop';

export default () => (
  <ScrollToTop>
    <App>
      <Switch>
        <Route path="/usb" component={USBPage} />
        <Route path="/network" component={NetworkPage} />
        <Route path="/counter" component={CounterPage} />
        <Route path="/detail/:ip" component={DetailPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </App>
  </ScrollToTop>
);
