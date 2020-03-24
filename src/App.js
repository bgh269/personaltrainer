import React from 'react';
import './App.css';
import Trainings from './components/Trainings';
import Customers from './components/Customers';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        
        <AppBar position="static">
          <Toolbar>
            <Typography className="typo-text" variant="h6">
              Personal trainer
            </Typography>
            <Link className="text-link" to="/customers">Customers</Link>
            <Link className="text-link" to="/trainings">Trainings</Link> 
          </Toolbar>
        </AppBar>
    
        <Switch>
          <Route exact path="/" component={Customers} />
          <Route path="/customers" component={Customers}/>
          <Route path="/trainings" component={Trainings}/>
          <Route render={() => <h1>Page not found!</h1>}/>
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
