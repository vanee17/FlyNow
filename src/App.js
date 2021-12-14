import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
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
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
