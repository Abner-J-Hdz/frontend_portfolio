import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Layout, Menu} from 'antd'
import { HomeOutlined, UserOutlined, DatabaseOutlined, ProjectOutlined } from '@ant-design/icons'
import './MenuSider.scss'
 
function MenuSider(props) {
    const {menuCollapsed, location} = props;
    const { Sider } = Layout;
    //console.log(location);
    return (
      <Sider className="admin-sider" collapsed={menuCollapsed}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
            <Menu.Item key="/admin">
                <Link to={"/admin"}>
                    <HomeOutlined />
                    <span className="nav-text">Home</span>
                </Link>
            </Menu.Item>

            <Menu.Item key="/admin/tecno">
                <Link to={"/admin/tecno"}>
                    <DatabaseOutlined />
                    <span className="nav-text">Tecnologys</span>
                </Link>
            </Menu.Item> 

            <Menu.Item key="/admin/project">
                <Link to={"/admin/project"}>
                    <ProjectOutlined />
                    <span className="nav-text">Project</span>
                </Link>
            </Menu.Item>

            <Menu.Item key="/admin/about">
                <Link to={"/admin/about"}>
                    <UserOutlined />
                    <span className="nav-text">About Me</span>
                </Link>
            </Menu.Item>

          </Menu>
      </Sider> 
    )
}

export default withRouter(MenuSider);
