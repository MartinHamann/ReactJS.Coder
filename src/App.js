import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  const productos = ["Cervezas", "Vinos", "Destilados"]

  return (
    <div>
      <NavBar />
      <ItemListContainer items={productos} />
      {/* <ItemCount stock={10} inicial={1} onAdd={0}/> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
