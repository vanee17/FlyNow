import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cart from './components/context/Cart';
import { CartContext } from './components/context/CartContext';

function App() {
  return (
    <div className="App">
    <CartContext>
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path ='/'>
          <ItemListContainer greeting="Paquetes que tenemos para ti"/>
        </Route>
        <Route  path ='/category/:categoryId'>
          <ItemListContainer/>
        </Route>
        <Route  path ='/detail/:paramId'> 
          <ItemDetailContainer/>
        </Route>
        <Route  path={'/cart'}>
        <Cart/>
        </Route>
      </Switch>
    </BrowserRouter>
    </CartContext>
    </div>
    
  );
}

export default App;
