import React, { useState, useContext, useEffect } from 'react'
import { Route, Switch , Redirect} from 'react-router-dom'
import { Layout, Spin } from 'antd'
import PageSignIn from '../pages/Admin/SignIn.page'
import MenuTopAdmin from '../components/Admin/MenuTopAdmin'
import MenuSider from '../components/Admin/MenuSider'
import './LayoutAdmin.scss'
import AuthContext from '../context/Auth/AuthContext';
//import PrivateRoute from '../routes/PrivateRoute';

export default function LayoutAdmin(props) {
    const { routes } = props;//para sacar las subroutes que vienes desdes el app
    const { Header, Content, Footer} = Layout;
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    
    const authContext = useContext(AuthContext);
    const { autenticado, isLoading, userAutheticated  } = authContext;

    useEffect(() => {
        //loading(true);
        userAutheticated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //const {user, isLoading} = useAuth();
    // si ambos son false
    if( !autenticado  ){
        return(
            <>
                <Route path="/admin/signin" component={PageSignIn} />
                <Redirect to="/admin/signin" />
            </>
        )
    }
    if(autenticado && !isLoading){
    return (
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} />
            <Layout className="layout-admin"
                style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
            >
                <Header className="layout-admin__header">
                    <MenuTopAdmin
                        menuCollapsed={menuCollapsed} 
                        setMenuCollapsed={setMenuCollapsed} 
                    />
                </Header>
                <Content className="layout-admin__content">
                    
                    <LoadRoutes routes={routes} />
                </Content> 
                <Footer className="layout-admin__footer">
                    Portafolio Web | Abner J Martínez Hernández
                </Footer>
            </Layout>
        </Layout>
    )
    }
    return (
        <div className="my-spinner">
            <div className="my-spinner_spinner">
                <Spin color="#0098d3" />
            </div>
        </div>        
    )
}

function LoadRoutes({routes}){

return(
    <Switch>
        {
        routes.map((route, index) => (
                <Route 
                    key= {index}
                    path= {route.path}
                    exact= {route.exact}
                    component= {route.component}
                />   
            ))        
        }
    </Switch>
)

/*podria quedar asi, pero de esta manera la pagina de error 404
siempre se miraria en conjunto con la pagina que se debe ver*/
    //descruturing en el pase de parametros
    /*return routes.map((route, index) => (
        <Route 
            key= {index}
            path= {route.path}
            exact= {route.exact}
            component= {route.component}
        />   
    ));*/
}