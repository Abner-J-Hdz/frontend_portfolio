import React,{ useContext } from 'react'
import './MenuTopAdmin.scss'
import Logo from '../../../assets/img/AbnerLogo.png'
import AuthContext from '../../../context/Auth/AuthContext'
//import { } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons'

export default function MenuTopAdmin(props) {
    const { menuCollapsed, setMenuCollapsed } =props;
    const authContext = useContext(AuthContext);
    const { LogOut } = authContext;

    const handleCerrarSesion = () => {
        LogOut();
    }

    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img 
                    src={Logo}
                    className="menu-top__left-logo"
                    alt="Abner Martinez"
                />
                <button className="ant-btn ant-btn-link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                   {
                       menuCollapsed ?
                       <MenuUnfoldOutlined className="my-icon" /> :
                       <MenuFoldOutlined className="my-icon" />
                   }
                </button>           
            </div>
            <div className="menu-top__right">
                <button className="ant-btn ant-btn-link" onClick={handleCerrarSesion}>
                    <PoweroffOutlined className="my-icon" />
                    <span>Cerrar Sesión</span>
                </button>
            </div>
        </div>
    )
}
