import React from 'react';

import HomePage from './pages/Home.js'
import InstructionPage from './pages/Instructions.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';


const App = () => {
  return (
    <Container>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <Router>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/instructions">
                  <InstructionPage />
                </Route>
              </Switch>
            </Router>
          </Col>
        </Row>
    </Container>
  );
}

export default App;