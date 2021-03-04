import React, { useContext } from 'react'
import { Route, Redirect} from 'react-router-dom'
import AuthContext from '../context/Auth/AuthContext';

const PrivateRoute = ({ component: Component, ...props}) => {
    const authContext = useContext(AuthContext);
    const { autenticado } = authContext;
    
    return(
        <Route  {...props} render={ props => !autenticado ? 
            ( <Redirect to="/admin/signin" />)
            :
            ( <Component {...props} />)}
        />
    )
}

export default PrivateRoute;