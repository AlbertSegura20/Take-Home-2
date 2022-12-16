import React, {ChangeEventHandler, FormEventHandler, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';

import {Button, Menu, MenuProps} from 'antd';
import {Link} from "react-router-dom";


type MenuItem = Required<MenuProps>['items'][number];

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
    getItem(<Link to={"/FormAgent"}>Form Agent</Link>, '1', ),
    getItem(<Link to={"/ViewAgent"}>View Agents</Link>, '2', ),
];

const App = ({isSearchBarActived, handleSubmitSearch ,handleChangeSearch}: {isSearchBarActived:any,
                                    handleSubmitSearch:FormEventHandler, handleChangeSearch:ChangeEventHandler}) => {
    const [collapsed, setCollapsed] = useState(false);


    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    if(isSearchBarActived===false){
        return (
            <div>

                <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                    <div className="container-fluid">
                        <h2><Link to={"/"}>Take-Home-2</Link></h2>
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
                        inlineCollapsed={collapsed}
                        items={items}>

                    </Menu>
                </div>

            </div>
        );

    }else{

        return (
            <div>

                <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                    <div className="container-fluid">
                        <h2><Link to={"/"}>Take-Home-2</Link></h2>
                        <form className="d-flex" onSubmit={handleSubmitSearch}>
                            <input className="form-control me-1" type="search" onChange={handleChangeSearch} placeholder="Search" aria-label="Search"/>
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
                        inlineCollapsed={collapsed}
                        items={items}>

                    </Menu>
                </div>

            </div>
        );
    }

};


export default App;