import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import CartWidget from './components/CartWidget';

function App() {

/*   const productos = ["Cervezas", "Vinos", "Destilados"] */

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
          <Route path='/cart' element={<CartWidget />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
        </Routes>
        {/* <ItemListContainer items={productos} /> */}
        {/* <ItemCount stock={10} inicial={1} onAdd={0}/> */}
        {/* <ItemDetailContainer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
