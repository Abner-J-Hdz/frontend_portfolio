import clientAxios from '../Config/axios';
import tokenAuth from '../Config/tokenAuth'

export const CreateTecnology = async(data) => {
    const access_token = localStorage.getItem('access_token');
    if(access_token){        
        tokenAuth(access_token);//funcion para enviar el token por header
    }else{
        return "No token";
    } 
    try {
        const response = await clientAxios.post('api/tecno', data);
        return response.data;
    } catch (error) {
        console.log(error.response.data.message)
        return error.response.data.message;         
    }    
}

export const ReadTecnology = async() => {
    const idUser = process.env.REACT_APP_ID_USER;
    try {
        const response = await clientAxios.get('api/tecno/' + idUser);
        return response.data;        
    } catch (error) {
        console.log(error.response.data.message)
        return error.response.data.message;         
    }
}

export const UpdateTecnology = async(data) => {
    const access_token = localStorage.getItem('access_token');
    if(access_token){        
        tokenAuth(access_token);//funcion para enviar el token por header
    }else{
        return "No token";
    } 
    try {
        const response = await clientAxios.put('api/tecno', data);
        return response.data;
    } catch (error) {
        console.log(error.response.data.message)
        return error.response.data.message;         
    }      
}

export const DeleteTecnology = async(id) => {
    const access_token = localStorage.getItem('access_token');
    if(access_token){        
        tokenAuth(access_token);//funcion para enviar el token por header
    }else{
        return "No token";
    } 
    try {
        const response = await clientAxios.delete('api/tecno/'+id);
        return response.data;
    } catch (error) {
        console.log(error.response.data.message)
        return error.response.data.message;         
    }      
}