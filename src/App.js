import './App.css';
import Navbar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    // jsx sintax
    <> 
      <div className="App">
        <Navbar />

      </div>
      {/* <ItemListContainer greeting="Bienvenidos a mi Ecommerce"/> */}
      <ItemDetailContainer/>
    </>
  );
}

export default App;
