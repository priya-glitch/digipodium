
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
// import Register from './components/register';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import ProductDetails from './components/productdetails';
import ProductList from './components/productlist';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header></Header>
    
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/productlist" component={ProductList}/>
          <Route path="/productdetails" component={ProductDetails}/>
          <Route path="/productdetails/:id" component={ProductDetails}/>
         

         
      </BrowserRouter>

    </div>
    
  );
}

export default App;
