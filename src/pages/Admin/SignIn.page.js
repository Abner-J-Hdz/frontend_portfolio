import React, {useContext, useEffect} from 'react'
//import { Redirect } from 'react-router-dom'
import { Spin} from 'antd'
import SignInComp from '../../components/Admin/SignIn' 
import AuthContext from '../../context/Auth/AuthContext'

export default function SignIn(props) {
    const authContext = useContext(AuthContext);
    const { autenticado } = authContext;
    useEffect(() => {
        if(autenticado){
            props.history.push('/admin');
        }
   
       // eslint-disable-next-line react-hooks/exhaustive-deps
       }, [autenticado]);
  
    if(autenticado=== null || autenticado === false){
        return ( 
            <div style={{ background: autenticado ? '#fff' :'#001529' , height: '100vh', minHeight:'380px'}}>
                <SignInComp {...props} />
            </div>
        )
    }
    return(
        <div className="my-spinner">
            <div className="my-spinner_spinner">
                <Spin color="#0098d3" />
            </div>
        </div>  
    )

}
