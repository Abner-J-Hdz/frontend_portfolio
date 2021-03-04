import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'
//import {MenuOutlined} from '@ant-design/icons'
import Logo from '../../../assets/img/AbnerLogo.png'
import './MenuWeb.scss'


function MenuWeb(props) {
    const {location} = props;

    const addStyle = () => {
        const MenuHome = document.getElementById('home_menu');
        console.log('click');
        MenuHome.classList.add('ant-menu-item-selected');
    };

    const quitStyle = () => {    
        const MenuHome = document.getElementById('home_menu');    
        let SioNo = MenuHome.classList.contains('ant-menu-item-selected');
        if(SioNo) MenuHome.classList.remove('ant-menu-item-selected')    
    }
    /** cuando se presione el logo agregar esta clase al home ant-menu-item-selected */
    return (
        <Menu className="menu-web animated__reveal" style={{color:'#fff'}} mode="horizontal" defaultSelectedKeys={[location.pathname]} >
            <Menu.Item onClick={() => addStyle()} className="menu-web__img" >
                <Link to={"/"}>
                    <img src={Logo}  alt="Abner Martinez" />
                </Link>
            </Menu.Item>

            <Menu.Item id="home_menu" key="/" className="menu-top__item">
                <Link to={"/"}>
                   <span className="nav-text"> Home</span>
                </Link>
            </Menu.Item>

            <Menu.Item onClick={() => quitStyle()} key="/tecno" className="menu-top__item">
                <Link to={"/tecno"}>
                <span className="nav-text"> Tecnology</span></Link>
            </Menu.Item>      

            <Menu.Item onClick={() => quitStyle()} key="/project" className="menu-top__item">
                <Link to={"/project"}> Project</Link>
            </Menu.Item>  
            
            <Menu.Item onClick={() => quitStyle()} key="/contact" className="menu-top__item">
                <Link to={"/contact"}>Contact</Link>
            </Menu.Item>                            
        </Menu>
    )

}

export default withRouter(MenuWeb);