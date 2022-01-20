import React from 'react';
import Home from './Home';
import Favorites from './Favorites';
import SingleMovie from './SingleMovie';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/'> <Home/></Route>
      <Route path='/favorites'> <Favorites/> </Route>
      <Route path='/movies/:id' children={<SingleMovie/>} /> 
    </Switch>
  );
}

export default App;
