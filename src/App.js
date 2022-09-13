import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from './Contact';
import Blog from './Blog';
import Welcome from "./Welcome";
import Demo from './Demo';
import List from './List';
import Todo from './Todo';
import Axios from './Axios';
import Form from './Form';
import {Navbar,Nav,NavDropdown,Container } from 'react-bootstrap'





function App()  {

  
  return (

      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Link className="navbar-brand" to="/">
              <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width="50" height="50" alt=""/>
            </Link>
            <Link to="/"><Navbar.Brand  style={{ fontSize: "30px" }}>React</Navbar.Brand></Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                      <Link to="/" className="nav-link">Home</Link>
                      <Link to="/axios" className="nav-link">Axios</Link>
                      <Link to="/contact" className="nav-link">Contact</Link>
                      <Link to="/form" className="nav-link">Form</Link>
                      <Link to="/demo" className="nav-link">Demo</Link>
                      <Link to="/list" className="nav-link">List</Link>
                      <Link to="/todo" className="nav-link">Todo</Link>
                      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <Link to="/welcome" className="dropdown-item">Welcome</Link>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <Blog/>
            </Route>
            <Route  path="/contact">
              <Contact/>
            </Route>
            <Route  path="/form">
              <Form/>
            </Route>
            <Route  path="/demo">
              <Demo/>
            </Route>
            <Route  path="/list">
              <List/>
            </Route>
            <Route  path="/todo">
              <Todo/>
            </Route>
            <Route  path="/welcome">
              <Welcome title="Hello how are you?"/>
            </Route>
            <Route  path="/axios">
              <Axios/>
            </Route>
          </Switch>
      </Router>
  );
}

export default App;
