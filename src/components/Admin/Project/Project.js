import React, { useState } from 'react'
import { List, Modal, notification } from 'antd'
import { EditOutlined, DeleteOutlined } 
from '@ant-design/icons'
import ProjectForm from '../ProjectForm'
import MyModal from '../../Modal'
import {DeleteProject} from '../../../api/Project.Api'

import './Project.scss'

const { confirm } = Modal;

const Project = ({projectlist, setReloadProject}) => {
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null)
    /* To do edit user  and delete user  */

    const handleNewProject = () =>{
        setIsVisibleModal(true);
        setModalTitle("New Project");
        setModalContent(
            <ProjectForm 
                project={null}
                setIsVisibleModal={setIsVisibleModal}
                setReloadProject={setReloadProject}
            />
            
        );
    }

    const handleEditProject = (project) =>{
        setIsVisibleModal(true);
        setModalTitle("New Project");
        setModalContent(
            <ProjectForm 
                project={project}
                setIsVisibleModal={setIsVisibleModal}
                setReloadProject={setReloadProject}
            />  
        );
    }

    const handleDeleteProject = (id, name) =>{
        confirm({
            title: "Delete Project",
            content: `Are you shure delete this project ${name}?`,
            okText: "Delete",
            okType: "danger",
            cancelText: "Cancel",
            onOk(){
                DeleteProject(id)
                    .then(response => {
                        const typeNotification = response.code === 200 ? "success": "warning";
                        notification[typeNotification]({
                            message: response.message
                        });
                    })
                    .catch(
                        (err) => {
                            notification["error"]({
                                message: err.message
                            })
                        }
                    )
            }
        })
    }

    return (
        <div className="list-project">
            <div className="list-project_header">
                <div className="list-project_header-title">
                    <h1>Projects</h1>
                </div>
                <button  
                    className="ant-btn ant-btn-primary"
                    onClick={handleNewProject}
                >
                    New Project
                </button>
            </div>
            {/** do list en other component to iterar */}
            <List
                className=""
                dataSource={projectlist}
                renderItem={
                    project =>
                    <ProjectItem 
                        project={project}
                        handleEditProject={handleEditProject}
                        handleDeleteProject={handleDeleteProject}
                    />
                }
            />
            <MyModal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
                width={820}
            >
                {modalContent}
            </MyModal>
        </div>
    )
}

export default Project

function ProjectItem({project, handleEditProject, handleDeleteProject}){

    
    return (
        <List.Item
            className="list-item-project"
            actions={[
                <button
                    className="ant-btn ant-btn-primary"
                    onClick={() => handleEditProject(project)}
                >
                    <EditOutlined />
                </button>,
                <button
                    onClick={() => handleDeleteProject(project.id, project.name)}
                    className="ant-btn ant-btn-danger"
                >
                    <DeleteOutlined />
                </button>
            ]}
        >
            <List.Item.Meta title={project.name} />
        </List.Item>
    )
}