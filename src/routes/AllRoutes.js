import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../components/Home/Home-controller';

class AllRoutes extends React.Component {
    render() {
      return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
      )
    }
  }
  
  export default AllRoutes;