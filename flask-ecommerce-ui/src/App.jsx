import CustomerList from './Components/CustomerList'
import NavigationBar from './Components/NavigationBar';
import './AppStyle.css';
import {Routes, Route} from 'react-router-dom';
import CustomerFormWrapper from './Components/CustomerFormWrapper';
import HomePage from './Components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductForm from './Components/ProductForm';
import ProductList from './Components/ProductList'
import NotFound from './Components/NotFound';
function App() {
  return (
    <div className='app-container'>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/add-customer' element={<CustomerFormWrapper/>}/>
        <Route path='/edit-customer/:id' element={<CustomerFormWrapper/>}/>
        <Route path='/customers' element={<CustomerList/>}/>
        <Route path='add-product' element={<ProductForm/>}/>
        <Route path='/edit-product/:id' element={<ProductForm/>} />
        <Route path='/products' element={<ProductList/>} />
        <Route path='*' element={<NotFound/>}/>


      </Routes>
    </div>
  );
}

export default App;
