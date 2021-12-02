import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CurrentEmployees from './Pages/CurrentEmployees'
import Error from './Pages/Error'
import { Provider } from 'react-redux'
import store from './Utils/store'
//import reportWebVitals from './reportWebVitals';


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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
