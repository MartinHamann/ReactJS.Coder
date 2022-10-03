import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart';

function App() {

  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          </Routes>
        </CartProvider>
        {/* <ItemListContainer items={productos} /> */}
        {/* <ItemCount stock={10} inicial={1} onAdd={0}/> */}
        {/* <ItemDetailContainer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
