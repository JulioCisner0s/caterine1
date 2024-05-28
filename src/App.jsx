import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './index.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './contexts/CartProvider';
import CartContainer from './components/CartContainer/CartContainer';
import CheckoutContainer from './components/CheckoutContainer/CheckoutContainer';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<ItemListContainer saludo= "TIENDA"/>} />
            <Route exact path="/category/:categoryName" element={<ItemListContainer/>}/>
            <Route exact path="/product/:productId" element={<ItemDetailContainer/>}/>
            <Route exact path="/cart" element={<CartContainer/>}/>
            <Route path="/checkout" element={<CheckoutContainer/>} />
            <Route path="/*" element={<h1> Error 404 <br></br>Not Found</h1>} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
