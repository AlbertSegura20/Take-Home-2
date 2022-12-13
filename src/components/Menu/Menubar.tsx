import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';

import { Button, Menu } from 'antd';
import {Link} from "react-router-dom";


/*type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),

    getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),

    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),

        getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
];*/

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
       <div>

           <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
               <div className="container-fluid">
                   <a className="navbar-brand" ><h2><Link to={"/"}>Take-Home-2</Link></h2></a>
                   <form className="d-flex">
                       <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
                       <button className="btn btn-outline-success" type="submit">Search</button>
                   </form>
               </div>
           </nav>

           <div style={{ width: 256 }}>
               <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                   {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
               </Button>
               <Menu
                   defaultOpenKeys={['sub1']}
                   mode="inline"
                   theme="dark"
                   inlineCollapsed={collapsed}>
                   <Menu.Item key="1"><Link to={"/FormAgent"}>Add Agent</Link></Menu.Item>
                   <Menu.Item key="2"><Link to={"/ViewAgent"}>View Agents</Link></Menu.Item>

               </Menu>
           </div>

           </div>
    );
};


export default App;