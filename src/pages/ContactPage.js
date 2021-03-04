import React, { useState, useEffect } from 'react'
import Contact from '../components/Web/Conctac';
import { Spin, Alert } from 'antd'
import { ReadPersonalData } from '../api/PersonalData.Api'


const ContactPage = () => {

    const [aboutmeData, setAboutmeData] = useState(null);
    const [error, setError] = useState(null);

    //console.log(aboutmeData);
    useEffect(() => {
        ReadPersonalData()
            .then(response => {
                setAboutmeData(response.personalData)
                setError(false);
            })
            .catch(error => {
                //console.log(error);
                console.log('Hubo un error al obtener los datos');
                setError(true)
            })
    }, [])

    if(aboutmeData){
        return(
        <>
            <Contact aboutmeData={aboutmeData} />
        </>
        )
    }

    if(error){
        return(
            <Alert
                className="my-alert-warning animated__reveal"
                message="Warning"
                description="Server is not responding
                
Cannot get data of Contact"
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

export default ContactPage
