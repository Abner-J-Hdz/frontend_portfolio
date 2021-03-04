import clientAxios from '../Config/axios'
import tokenAuth from '../Config/tokenAuth'

export const CreateProject = async(data) =>{

    const access_token = localStorage.getItem('access_token');

    try {
        if(access_token){        
            tokenAuth(access_token);//funcion para enviar el token por header
        }else{
            return "No token";
        }
        const response =  await clientAxios.post('/api/project', data);
        return response.data;
    } catch (error) {
        console.log(error.response.data.message)
        return error.response.data.message;
    }
}

export const ReadProject = async() => {
    const idUser = process.env.REACT_APP_ID_USER;
    try {
        const response = await clientAxios.get('api/project/' + idUser);
        //console.log(response.data);
        return response.data;
    } catch (error) {
        //console.log(error.response.data.message) 
        return error.response.data.message;        
    }
}

export const UpdateProject = async(data) => {

    const access_token = localStorage.getItem('access_token');    
    try {
        if(access_token){        
            tokenAuth(access_token);//funcion para enviar el token por header
        }else{
            return "No token";
        }
        const response = await clientAxios.put('api/project',data);
        return response.data;

    } catch (error) {
        console.log(error.response.data.message)
        return error.response.data.message;          
    }
}

export const DeleteProject = async(id) => {
    const access_token = localStorage.getItem('access_token');
    if(access_token){        
        tokenAuth(access_token);//funcion para enviar el token por header
    }else{
        return "No token";
    }   
    try {
        const response = await clientAxios.put('api/project/'+id,);
        return response.data;
    } catch (error) {
        console.log(error.response.data.message)
        return error.response.data.message;             
    }
}