import React from 'react';
import './App.css';
import Navigator from './components/Navigator';
import Trainings from './components/Trainings';
import Customers from './components/Customers';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navigator/>
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
