import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer saludo= "TIENDA"/>} />
          
          <Route path="*" element={<h1> Error 404 <br></br>Not Found</h1>} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
