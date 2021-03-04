import React, { useState, useEffect} from 'react'
import Project from '../components/Web/Project'
import { Spin,  Alert } from "antd";
import { ReadProject } from '../api/Project.Api'

const ProjectPage = () => {

    const [project, setProject] = useState(null);
    const [error, setError] = useState(null);

    //console.log(project);
    useEffect(() => {
        ReadProject()
            .then(response =>{
                setProject(response.project);
                setError(false)
            })
            .catch(error => {
                setError(true)
                //alert("server not response");
            })
    }, [])

    if(project){
        return (
            <Project project={project} />
        )
    }

    if(error){
        return(
            <Alert
                className="my-alert-warning animated__reveal"
                message="Warning"
                description="Server is not responding
                
Cannot get data of projects"
                type="warning"
                showIcon
                
            />
        )
    }

    return (
        <div >
            <Spin 
                tip="Loading" 
                style={{width: "100%", padding: "200px 0"}}  
                size="large"
            />
        </div>
    )  
}

export default ProjectPage
