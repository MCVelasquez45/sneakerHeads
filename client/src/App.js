import './App.css';
import { Routes, Route } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignIn from './pages/SignIn';  // Assuming your SignIn component is located here
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import ShopContextProvider from './context/shop-context';

function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signUpPage' element={<SignUpPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    
    </div>
  );
}

export default App;
