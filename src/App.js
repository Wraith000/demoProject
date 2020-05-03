import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {  BrowserRouter as Router,  withRouter,  HashRouter,  Switch,  Route,  Link} from "react-router-dom";
import Landing  from '../src/Components/LandingPage/Landing';
import Second  from '../src/Components/SecondPage/Second';
import Heading  from '../src/Components/Header/Header';
import { Layout } from 'antd';
const { Content } = Layout;



function App() {
  return (
    <React.Fragment>
      <Layout>
        <Content>
        <Router>
            <Heading></Heading>
            <Route exact path="/demoproject/" component={Landing}/> 
            <Route exact path="/demoproject/Second" component={Second}/> 
        </Router>
        </Content>
      </Layout>
    </React.Fragment>
   );
}

export default App;
