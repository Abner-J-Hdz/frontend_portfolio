import React from 'react'
import { Row, Col, Card, Badge, Carousel } from 'antd'
import '../Tecno/Tecno.js.scss'

export default function Project({project}) {


    return (
        <Row style={{marginTop:'20px'}} className="tecno">
            <Col lg={4}></Col>
            <Col lg={16}>
                <Row className="tecno-titulo">
                    <h1>Projects</h1>
                </Row>
                <Row className="row-tecno">
                    {
                        project.map((project, index) => (
                            <Col key={index} md={8}>
                                <CardProject 
                                    img={project.img} 
                                    tecnology={project.tecnologys}
                                    title={project.name}
                                    description={project.description}
                                    link={project.gitLink}
                                    publicRepo={project.appLink}
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

function CardProject(props){
    const { img, title, tecnology, description, link, publicRepo } = props;
console.log( img, title, tecnology, description, link, publicRepo)
        
    return (
        <Card
            className="row-tecno_card animated__show"
            cover={<MyCarousel img={img} />}
        >

            <h2 style={{textAlign:'center', color:'#fff', marginBottom: '5px'}}>{title}</h2><br/>
            <p style={{color: '#fff'}}><strong style={{color: '#0098d3'}}>Description: </strong><br/>{description}</p>
            <p style={{color: '#fff'}}><strong style={{color: '#0098d3'}}>Tecnology: </strong><br/>
            {tecnology.map((tecno, index)=>(
                <Badge key={index} count={tecno} style={{background: 'transparent', fontWeight:'bold', borderColor: '#0098d3', marginRight: '7px'}} />
                ))}
            </p>

            <p style={{color: '#fff'}}>
                {
                    link === "empty" ?
                    (
                            <strong style={{color: '#0098d3'}}>Github: None </strong>
                    ):
                    (
                    <a 
                        href={link}
                        className="linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                       <strong style={{color: '#0098d3'}}>Github: </strong>Click here<br/>
                    </a>  
                    )
                }
            </p>

            <p style={{color: '#fff'}}>
                {publicRepo === "empty" ?  
                (<strong style={{color: '#0098d3'}}>Link: None </strong>) 
                :(
                <a 
                    href={publicRepo}
                    className="linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <strong style={{color: '#0098d3'}}>Link: </strong>{ publicRepo === "empty" ?  "None" : "Click here"}
                </a>)
                }
            </p>
        </Card>
    );
}

function MyCarousel({img}){
    const imgStyle = {
        width: '100%',
    };
    return (
    <Carousel autoplay autoplaySpeed={3000} >   
        {
            img.map((img, index) => (
            <div key={index}>
                <img style={imgStyle} src={img} alt={img} />
            </div>                
            ))
        }
    </Carousel>    
    )
}