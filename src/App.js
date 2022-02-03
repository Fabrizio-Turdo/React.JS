import './App.css';
import Navbar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    // jsx sintax
    <> 
      <div className="App">
        <Navbar />

      </div>
      <ItemListContainer/>

    </>
  );
}

export default App;
