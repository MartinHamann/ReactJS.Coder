import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';

function App() {

  const productos = ["Cervezas", "Vinos", "Destilados"]

  return (
    <div>
      <NavBar />
      <ItemListContainer items={productos} />
    </div>
  );
}

export default App;
