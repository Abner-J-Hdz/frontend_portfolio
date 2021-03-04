import React from 'react'
import { Row, Col, Card} from 'antd'
import { FacebookOutlined, GithubOutlined, MailOutlined, PhoneOutlined} from '@ant-design/icons'
import './Contact.scss'

export default function Contact({ aboutmeData }) {
    
    const objectJson = aboutmeData[0];
    
    const { Meta } = Card;
    return (
        <Row className="contact"> 
            <Col lg={4}></Col>
            <Col lg={16}>
                <Row className="contact__row" >
                    <h1>Contact</h1>
                </Row>
                <Row className="row-contact letter">
                    <Col md={6}>
                        <Card className="row-contact-cardItem animated__show">
                            <MailOutlined />
                            <Meta title="Email" description={objectJson.email} />
                        </Card>                        
                    </Col>
                    <Col md={6}>
                        <Card className="row-contact-cardItem animated__show">
                            <PhoneOutlined />
                            <Meta title="Phone" description={objectJson.phone} />
                        </Card>                        
                    </Col>
                    <Col md={6}>
                        <Card className="row-contact-cardItem animated__show">
                            <a href={objectJson.facebook} target="_blank"
                            rel="noopener noreferrer"><FacebookOutlined /></a>
                            <Meta title="Facebook" description={objectJson.facebook} />
                        </Card>                        
                    </Col>
                    <Col md={6}>
                        <Card className="row-contact-cardItem animated__show">
                            <a href={objectJson.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <GithubOutlined />
                            </a>
                            <Meta title="Github" description={objectJson.github} />
                        </Card>                        
                    </Col>                                                            
                </Row>
            </Col>
            <Col lg={4}></Col>
        </Row>
    )
}
