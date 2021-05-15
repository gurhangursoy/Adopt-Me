import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Router>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    {' '}
    <App />
  </StrictMode>,
  document.getElementById('root')
);
