import React from 'react'
import { Row, Col, Card } from 'antd'
import Yo from '../../../assets/img/FotoTitulo.png'
import './AboutMe.scss'

export default function AboutMe({ aboutmeData }) {
    
    const Data = aboutmeData[0];
    
    return (
        <Row style={{marginTop:'20px'}} className="about-me">
            <Col lg={4}></Col>
            <Col lg={16}>
                <Row className="about-me__row" >
                    <h1>About Me</h1>
                </Row>
                <Row className="row-tecno letter">
                    <Col md={24} >
                        <Card className="row-tecno__card animated__show">
                            <Row>
                                <Col md={12} className="row-tecno__card_col">
                                    <div className="div_image">
                                        <img src={Yo} loading="lazy" alt="abner martinez" />
                                    </div> 
                                </Col>
                                <Col md={12} className="row-tecno__card_col">
                                    <div className="div_text" style={{ width: '100%'}}>
                                        <p ><strong style={{color: '#0098d3'}}>Full Name:</strong>  {`${Data.name} ${Data.lastname}`} </p>
                                        <p ><strong style={{color: '#0098d3'}}>Carreer:</strong>  {Data.carreer} </p>
                                        <p ><strong style={{color: '#0098d3'}}>University:</strong>  {Data.university}</p>
                                        <p ><strong style={{color: '#0098d3'}}>Age:</strong>  22 year old</p> 
                                        <p ><strong style={{color: '#0098d3'}}>Description:</strong>  {Data.aboutme}
                                        </p> 
                                    </div>
                                </Col>                                
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col lg={4}></Col>
        </Row>
    )
}
