
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
// import Register from './components/register';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import ProductDetails from './components/productdetails';
import ProductList from './components/productlist';
import EventHandling from './components/eventHandling';
import Gallery from './components/gallery';
import Forms from './components/forms';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header></Header>
    
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/productlist" component={ProductList}/>
          <Route path="/productdetails/:id" component={ProductDetails}/>
          <Route path="/events" component={EventHandling} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/forms" component={Forms} />

      </BrowserRouter>

    </div>
    
  );
}

export default App;
