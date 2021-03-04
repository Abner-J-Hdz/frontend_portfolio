import React from 'react'
import { Layout, Row} from 'antd'

import './Footer.scss'

export default function Footer() {
    const { Footer } = Layout;
    return (
        <Footer className="footer animated__reveal">

            <Row className="footer__copyright">
                <h4 className="text-center" >© 2021 ALL RIGHTS RESERVED​</h4> 
            </Row>
            <Row className="footer__copyright">
                <h4 className="text-center" >Web Portfolio</h4>  
            </Row>
            <Row className="footer__copyright">
                <h4 className="text-center" >Abner Martínez Hernández | Full Stack Web Developer</h4>
            </Row>
                
        </Footer>
    )
}
