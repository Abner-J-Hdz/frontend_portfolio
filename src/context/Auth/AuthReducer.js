import {
    OBTENER_USUARIO, LOGIN_EXITOSO,
    LOGIN_ERROR, CERRAR_SESION, LOADING
} from '../../types';


// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type){

        case LOGIN_EXITOSO:
            localStorage.setItem('access_token', action.payload.token);
            return{
                ...state,
                autenticado: false,
                message: action.payload.message,
                token: action.payload.token,
                typomes: 'success',
                cargando: false
            }

        case CERRAR_SESION:
        case LOGIN_ERROR:
            localStorage.removeItem('access_token');
            return{
                ...state,
                token: null,
                usuario: null,
                autenticado: null,
                message: action.payload,
                typomes: 'error',
                cargando: false
            }

        case LOADING:
            return{
                ...state,
                cargando: action.payload
            }

        case OBTENER_USUARIO:
            return{
                ...state,
                autenticado:true,
                usuario:action.payload,
                message: 'Bienvenido',
                typomes: 'success',
                cargando: false
            }

        default: 
            break;
    }
}