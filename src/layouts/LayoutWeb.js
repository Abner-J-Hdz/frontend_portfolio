import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Row, Col } from  'antd'
import MenuWeb from '../components/Web/MenuWeb'
import FooterWeb from '../components/Web/Footer'
import './LayoutWeb.scss'

export default function LayoutWeb(props) {
    const {routes } = props;
    return (
        <>
            
            <Row style={{ borderBottom: "2px #0098d3 solid", paddingBottom: "5px"}}>
                <Col lg={4}></Col>
                <Col lg={16} style={{width:'100%'}} >
                    <MenuWeb />
                </Col>
                <Col lg={4}></Col>
            </Row>
            
            <LoadRouters routes={routes} />
            <br /> 
            <FooterWeb />
            
        </>
    )
}

function LoadRouters({routes}) {
    
    return (
        <Switch>
        {
            routes.map((route, index) =>(
                <Route 
                    key={index}
                    path={route.path}
                    exact={route.exact} 
                    component={ route.component} />
            ))
        }
    </Switch>
    )
}
/**
     <Layout>
        <Header>
            <h1 style={{textAlign:"center"}}>Menu top Web</h1>
        </Header>
        <Content>
            Contenido
            <LoadRouters routes={routes} />
        </Content>
        <Footer>
            Abner Joel Martinez Hdz
        </Footer>
    </Layout>
 
 */