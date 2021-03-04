
/*imp→	import moduleName from 'module'
imn→	import 'module'
imd→	import { destructuredModule } from 'module'
ime→	import * as alias from 'module'
ima→	import { originalName as aliasName} from 'module'
exp→	export default moduleName*/
import clientAxios from '../Config/axios';
import tokenAuth from '../Config/tokenAuth';

export const CreatePersonalData =  async (data) => {
    const access_token = localStorage.getItem('access_token');
    if(access_token){        
        tokenAuth(access_token);//funcion para enviar el token por header
    }else{
        return "No token";
    } 
    try {
        const response = await clientAxios.post('api/personaldata', data);
        return response.data;
    } catch (error) {
        console.log(error.response.data.message)
        return error.response.data.message;         
    }      
}

export const ReadPersonalData = async() => {
    const idUser = process.env.REACT_APP_ID_USER;
    try {
        const response = await clientAxios.get( `api/personaldata/${idUser}`);
        return response.data;        
    } catch (error) {
        console.log(error.data.message)
        return error.data.message;         
    }
}

export const UpdatePersonalData = async(data) => {
    const access_token = localStorage.getItem('access_token');
    if(access_token){        
        tokenAuth(access_token);//funcion para enviar el token por header
    }else{
        return "No token";
    } 
    try {
        const response = await clientAxios.put('api/personaldata', data);
        return response.data;
    } catch (error) {
        console.log(error.response.data.message)
        return error.response.data.message;         
    }      
}

export const DeletePersonalData = async(id) => {
    const access_token = localStorage.getItem('access_token');
    if(access_token){        
        tokenAuth(access_token);//funcion para enviar el token por header
    }else{
        console.log('no token');
        return "No token";
    } 
    try {
        const response = await clientAxios.delete('api/personaldata/'+id);
        return response.data;
    } catch (error) {
        console.log(error.response.data.message)
        return error.response.data.message;         
    }      
}