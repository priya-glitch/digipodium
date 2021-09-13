
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
// import Register from './components/register';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import ProductDetails from './components/productdetails';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header></Header>
    
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/productdetails" component={ProductDetails}/>

         
      </BrowserRouter>

    </div>
    
  );
}

export default App;
