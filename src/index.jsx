import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CurrentEmployees from './Pages/CurrentEmployees'
import Error from './Pages/Error'
import { Provider } from 'react-redux'
import store from './Utils/store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/currentEmployees">
            <CurrentEmployees />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
