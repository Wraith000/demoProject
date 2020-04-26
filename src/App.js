import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;