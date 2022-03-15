import './App.css';
import Navbar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ItemDetail from './components/ItemDetailContainer/ItemDetail';

function App() {
  return (
    // jsx sintax
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"
            element={
            <ItemListContainer greeting="Bienvenidos a mi Ecommerce" />
            }>
          </Route>
          <Route path="/item" element={
            <ItemDetailContainer/>
          }>

          </Route>
        </Routes>
      </BrowserRouter>
      <>

      </>
    </>
  );
}

export default App;
