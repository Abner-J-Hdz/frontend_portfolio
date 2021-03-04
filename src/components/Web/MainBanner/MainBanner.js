import React from 'react';
import { Row, Col} from 'antd';
import './MainBanner.scss'

export default function MainBanner(){
    return (
        <div className="main-banner letter animated__show">        
            <div className="main-banner__dark">
            <Row>
                <Col md={4} />
                <Col md={16} className="animated__show__letter">
                    <h2>Abner J<br/> Martínez Hernández</h2>
                    <h3> 
                        Full Stack Web Developer
                    </h3>
                </Col>
                <Col md={4} />
            </Row>
            </div>
        </div>
    );
}