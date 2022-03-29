import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Home from './Pages/Home';
//import CurrentEmployees from './Pages/CurrentEmployees'
//import Error from './Pages/Error'
import { Provider } from 'react-redux'
import store from './Utils/store'

const Home = lazy(() => import('./Pages/Home'))
const CurrentEmployees = lazy(() => import('./Pages/CurrentEmployees'))
const Error = lazy(()=>import('./Pages/Error'))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Suspense fallback={<div>Chargement...</div>}>
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
        </Suspense>

      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
