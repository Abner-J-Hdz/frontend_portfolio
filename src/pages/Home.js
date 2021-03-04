import React, { useState, useEffect } from 'react'
import MainBanner from '../components/Web/MainBanner';
import AboutMe from '../components/Web/AboutMe';
import {Spin, Alert} from 'antd'
import { ReadPersonalData } from '../api/PersonalData.Api'


export default function Home() {

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
                setError(true);
                console.log('Hubo un error al obtener los datos');
            })
    }, [])

    if(aboutmeData){
        return(
        <>
            <MainBanner  />
            <AboutMe aboutmeData={aboutmeData} />
        </>
        )
    }

    return (
        <>
            <MainBanner  />

            {error === false ?
                <div >
                    <Spin 
                        tip="Loading" 
                        style={{width: "100%", padding: "200px 0"}}  
                        size="large"
                    />
                </div>             
             :
                (<Alert
                    className="my-alert-warning animated__reveal"
                    message="Warning"
                    description="Server is not responding.
                    
                    Cannot get data of about me"
                    type="warning"
                    showIcon
                />) }
        </>
    )
}
