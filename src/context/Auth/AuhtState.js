import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import authReducer from './AuthReducer';
import tokenAuth from '../../Config/tokenAuth';
import clientAxios from '../../Config/axios';

import {
    OBTENER_USUARIO, LOGIN_EXITOSO,
    LOGIN_ERROR, CERRAR_SESION
} from '../../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('access_token'),
        autenticado: null,
        usuario: null,
        message: null,
        typomes: 'error',
        cargando: false
    };

    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(authReducer, initialState);

    //Retorna el usuario autenticado
    const userAutheticated = async() =>{
        const access_token = localStorage.getItem('access_token');
        if(access_token){
            //funcion para enviar el token por header
            tokenAuth(access_token);
        }else{
            dispatch({
                type: LOGIN_ERROR
            }); 
        }

        try {
            const respuesta = await clientAxios.get('/api/auth');
            //console.log(respuesta);
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.user
            });
        } catch (error) {
            console.log(error.response.data.message);
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    //Cuando el usuario inicia sesion
    const LogIn = async(datos) => {
        try {
            const respuesta = await clientAxios.post('/api/sign-in', datos);
            console.log(respuesta);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
           })
           //obtener el usuario
           //obtenemos los datos datos del usuario desencriptados
           userAutheticated();
        } catch (error) {
            console.log(error.response.data.message);
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.message
            })
        }
    }

    const LogOut = async() => {
        dispatch({
            type: CERRAR_SESION,
            payload: "Bye"
        })
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                message: state.message,
                isLoading: state.cargando,
                typomes: state.typomes,
                LogOut,
                LogIn,
                userAutheticated, 
                
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;