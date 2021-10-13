import React, {useState, useEffect} from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages';
import { Switch, Route } from 'react-router-dom'
import About from './pages/about';
import menu from './pages/menu';
import contact from './pages/contact';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log('I resizzzzzed');
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })


  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/menu' component={menu} />
        <Route path='/contact' component={contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
