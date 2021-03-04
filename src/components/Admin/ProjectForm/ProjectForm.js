import React, {useState, useEffect} from 'react'
import { Form, Row, Col, Input }  from 'antd'
import { FontSizeOutlined, GithubOutlined, 
    FileTextOutlined, AppstoreOutlined, NumberOutlined } 
from '@ant-design/icons'

export default function ProjectForm(props) {
    const {  project } = props;//setIsVisibleModal, setReloadProject,
    const [projectData, setProjectData] = useState({});

    useEffect(() => {
        if(project){
            setProjectData(project);
        }
        else{
            setProjectData({})
        }
    }, [project]);

    return (
        <div className="project-form-component">
            <Form
                className="project-form"
            >
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item>
                            <Input 
                                prefix={<FontSizeOutlined />}
                                placeholder="Name"
                                value={projectData.name}
                                onChange={ e => setProjectData({...projectData, name : e.target.value})}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item>
                            <Input 
                                prefix={<FileTextOutlined />}
                                placeholder="Description"
                                value={projectData.description}
                                onChange={ e => setProjectData({...projectData, description : e.target.value})}
                            />
                        </Form.Item>
                    </Col>  
                    <Col span={12}>
                        <Form.Item>
                            <Input 
                                prefix={<GithubOutlined />}
                                placeholder="Github"
                                value={projectData.gitLink}
                                onchange={ e => setProjectData({...projectData, gitLink : e.target.value})}
                            />
                        </Form.Item>
                    </Col>  
                    <Col span={12}>
                        <Form.Item>
                            <Input 
                                prefix={<AppstoreOutlined />}
                                placeholder="App Link"
                                value={projectData.appLink}
                                onChange={ e => setProjectData({...projectData, appLink : e.target.value})}
                            />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item>
                            <Input 
                                prefix={<NumberOutlined />}
                                placeholder="Order"
                                value={projectData.order}
                                onChange={ e => setProjectData({...projectData, order : e.target.value})}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <button style={{width: "100%"}} className="ant-btn ant-btn-primary">                    
                    {project? "Update Project" : "Save New Project"}
                </button>
            </Form>            
        </div>
    )
}

