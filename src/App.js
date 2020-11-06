import React, { useRef, useEffect } from 'react';
import { BrowserRouter, NavLink, Switch, Route, useLocation } from 'react-router-dom';
import {Home} from './component/Home';
import {About } from './component/About';
import {Contact} from './component/Contact';
import './App.css';


function App() {

  const navbarLinks = useRef(null);
  const handleNavbarButton = (e) => {
    navbarLinks.current.classList.toggle('menu-collapse');
  };

  const hideNavMenu = () => {
    if (!navbarLinks.current.classList.contains('menu-collapse')) {
      navbarLinks.current.classList.add('menu-collapse');
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <nav className='navbar'>
          <div className='navbar-container'>
            <a href="#" className='brand-title'><i class="far fa-laugh">Kidoo</i></a>
          <button onClick={(e) => { handleNavbarButton(e); }} className='navbar-toggler'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div ref={navbarLinks} className='navbar-links menu-collapse'>
              <ul className='links-list'>
                <li className='nav-item'>
                 <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/'>Home</NavLink>
                </li>
                <li className='nav-item'>
               <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/about'>About</NavLink>
                </li>
                <li className='nav-item'>
               <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/contact'>Contact</NavLink>
                </li>
              </ul>
            </div>
         </div>
        </nav>
        <div className='container'>
          <AllRoutes hideMenu={() => { hideNavMenu(); }}></AllRoutes>
        </div>
      </BrowserRouter>
    </div>
  );
}

function AllRoutes({ hideMenu }) {

  let location = useLocation();
  useEffect(() => {
    hideMenu();
  }, [location]);

  return (
    <Switch>
      <Route path="/about" component={About}>
      </Route>
      <Route path="/contact" component={Contact}>
      </Route>
      <Route path="/" component={Home}>
      </Route>
    </Switch>
  );
}




export default App;
