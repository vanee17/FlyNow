import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'

function App() {
  return (
    <div className="App">
  <NavBar/>
  <ItemListContainer greeting="Bienvenid@ a BALÚ"/>
  <ItemCount stock={20} initial={1} /*onAdd={onAdd}*//>
    </div>
  );
}

export default App;
