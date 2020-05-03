import React from "react";
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { Header } = Layout;

const Heading = (props) =>{
    //const Context = useContext(ProdContext);
    return (
        <React.Fragment>
            <Header className="header">
                    <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                    {<Link to={{pathname:"/demoproject/"}  } activeClassName="test" >
                    Home
                    </Link>}
                    </Menu.Item>
                    <Menu.Item key="2">
                    {<Link to={{pathname:"/demoproject/Second"} } activeClassName="test">
                    Second
                    </Link>}
                    </Menu.Item>
                </Menu>
            </Header>
        </React.Fragment>
    )
}
export default Heading;