import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App">
  <NavBar/>
  <ItemListContainer greeting="Bienvenid@ a BALÚ"/>
  <ItemDetailContainer/>
    </div>
  );
}

export default App;
