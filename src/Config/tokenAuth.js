import clientAxios from './axios';

const tokenAuth = (access_token) => {
    if(access_token){
        clientAxios.defaults.headers.common['x-auth-token'] = access_token;
    }else{
        delete clientAxios.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth;