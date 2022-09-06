import './App.css';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  const productos = ["Cervezas", "Vinos", "Destilados"]

  return (
    <div>
      <NavBar />
      <ItemListContainer items={productos} />
      <ItemCount stock={10} inicial={1} onAdd={0}/>
    </div>
  );
}

export default App;
