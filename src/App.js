import Login from './Components/Login';
import Profile from './Components/Profile';
import Header from './Components/Nav/Header';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import ErrorPage from './Components/Utils/Error';
import Clothes from './Components/Category/clothes';
import Electronics from './Components/Category/Electronics';
import Cart from './Components/Pages/Cart';
import Shoe from './Components/Category/Shoe';
import Furniture from './Components/Category/Furniture';
import {Route, Routes, BrowserRouter as Router, BrowserRouter} from 'react-router-dom'
import { Alert } from './Components/Utils/alert';
function App() {
  return (
    <main>
   <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        <Alert/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/category/cloth' element={<Clothes/>}></Route>
          <Route path='/cart/' element={<Cart/>}></Route>
          <Route path='/category/electronics' element={<Electronics/>}></Route>
          <Route path='/category/shoe' element={<Shoe/>}></Route>
          <Route path='/category/furniture' element={<Furniture/>}></Route>

        </Routes>
      </BrowserRouter>

    </main>
  );
}

export default App;
