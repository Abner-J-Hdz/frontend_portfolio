import React, {useEffect, useState} from 'react'
import ProjectComp from '../../components/Admin/Project';
import { ReadProject } from '../../api/Project.Api';

export default function Project() {

    const [projectlist, setProjectlist] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [reloadProject, setReloadProject] = useState(false);
    useEffect(() => {
        ReadProject()
            .then(response => {
                setProjectlist(response.project);
            });
        setReloadProject(false);
    }, [setReloadProject]);

    return (
        <ProjectComp 
            projectlist={projectlist}
            setReloadProject={setReloadProject} 
        />  
        
    )
}