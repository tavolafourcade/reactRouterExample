import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>

      <Link to='/'>Home</Link><br/>
      <Link to='/about'>About</Link><br/>
      <Link to='/contact'>Contact</Link><br/>

      <Route path='/' exact component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/contact' component={Contact}/>
    </div>
  );
}

export default App;
