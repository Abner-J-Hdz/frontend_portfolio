import React from 'react'
import { Row, Col, Card, Input } from 'antd'
import './Tecno.js.scss'

export default function Tecno({ tecno}) {
    
    return (
        <Row style={{marginTop:'20px'}} className="tecno">
            <Col lg={4}></Col>
            <Col lg={16}>
                <Row className="tecno-titulo">
                    <h1 >Tecnologys, languajes and Frameworks</h1>
                </Row>
                <Row className="row-tecno">
                    {
                        tecno.map((tecno, index) => (
                            <Col key={index} md={8}>
                                <CardTecno 
                                    img={tecno.img} 
                                    level={tecno.level}
                                    title={tecno.title}
                                    description={tecno.description}
                                />  
                            </Col>
                        ))
                    }
                </Row>
            </Col>
            <Col lg={4}></Col>
        </Row>
    )
}

function CardTecno(props){
    const { img, title, level, description } = props;
    const { Meta } = Card;

    return (
        <Card
            className="row-tecno_card animated__show"
            cover={<img src={img} alt={title} />}           
        >
            <Meta 
                title={title}
                description={description}
                style={{marginBottom:'5px'}}
            />
            <span style={{color: '#fff'}}>Level: {level}%</span>
            <Input type="range" value={level} />
        </Card>
    );
}