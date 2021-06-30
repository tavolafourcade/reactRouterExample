import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error404 from './components/Error404'
import Products from './components/Products';

function App() {
  return (
    <div>

      <Link to='/'>Home</Link><br/>
      <Link to='/about'>About</Link><br/>
      <Link to='/contact'>Contact</Link><br/>
      <Link to='/products/1'>Products</Link><br/>
      <Link to='/Error404'>Not Found</Link><br/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/products/:id' component={Products}/>
        <Route component={Error404}/>
      </Switch>
      
    </div>
  );
}
export default App;
