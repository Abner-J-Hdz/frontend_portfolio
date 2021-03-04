import React, { useEffect, useState} from 'react'
import Tecnologys from '../components/Web/Tecno'
import { Spin, Alert } from "antd";

import { ReadTecnology } from '../api/Tecnologys.Api'

const TecnoPage = () => {

    const [tecno, setTecno] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        ReadTecnology()
            .then( response => {
                setTecno(response.tec);
                setError(false);
            })
            .catch(error => {
                setError(true);
                console.log(error.message);
                //setMessage ("El servidor no responde");
                /*notification["error"]({
                    message: "Serve not response"
                });*/
            });
    }, []);
    if(tecno){
        return (
            <>
                <Tecnologys tecno={tecno} />
            </>
        )
    }

    if(error){
        return(
            <Alert 
                className="my-alert-warning animated__reveal"
                message="Warning"
                description="Server is not responding.
                
                Cannot get data of tecnologys, framework and 
                library"
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

export default TecnoPage
