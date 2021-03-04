import React, { useState, useContext, useEffect } from 'react'
import { Row, Col, Form, Input, notification, Spin } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'

import AuthContext from '../../../context/Auth/AuthContext';

import './SignIn.scss'

export default function SignIn(props) {
    //extract values of context
    
    const authContext = useContext(AuthContext);
    const { LogIn, message, typomes } = authContext;
    
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading ] = useState(false);

    useEffect(() => {
     if(message){
        notification[typomes]({
            message: message
        });
        setLoading(false);    
     }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message]);

    const handleChange = (e) =>{
        setInputs({
            ...inputs,
            [e.target.id]: e.target.value
        })
    }

    const handleLogin = () =>{
        setLoading(true);
        //eslint-disable-next-line no-useless-escape
        const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const resultValidation = emailValid.test(inputs.email);//true correcto false incorrecto
        
        if(inputs.email.trim() === "" || inputs.password.trim() === ""){
            notification["error"]({
                message: "Todo los campos son obligatorios"
            });
            setLoading(false);
            return;  
        }
        
        if(!resultValidation){
            notification["error"]({
                message: "Escribe un correo valido"
            });
            setLoading(false);
            return;
        }
        //en la page de signin hay use effect que esta pendiente de autenticado
        //ya que si el logIn es bueno lo va a cambiar a true 
        LogIn({email: inputs.email, password: inputs.password});
        
        /*if(message === "Login Exitoso"){
            props.history.push('/admin');
        }*/
    }

    return (
        <Row className="signin">
            <Col lg={4}></Col>
            <Col lg={16} style={{width:'100%'}}>
                <Row className="signin_titulo">
                    <h1>Login Portafolio</h1>
                </Row>
                <Row className="signin_row">
                    <Form onChange={handleChange} onSubmitCapture={handleLogin} className="signin_form">
                        <Form.Item>
                            <label>Email</label>
                            <Input 
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                prefix={<MailOutlined />}
                                className="signin_form_input"
                            />
                        </Form.Item>
                        <Form.Item>
                            <label>Password</label>
                            <Input 
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                prefix={<LockOutlined />}
                                className="signin_form_input"
                            />
                        </Form.Item>
                        <Form.Item>
                            <button disabled={loading} type="submit" className="btn_login ant-btn ant-btn-primary">
                                { loading ? <Spin size="small"  /> : "Login"}
                            </button>
                        </Form.Item>                        
                    </Form>
                </Row>
            </Col>
            <Col lg={4}></Col>

        </Row>
    )

}
