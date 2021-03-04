import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route ,Switch} from 'react-router-dom';
import { Spin } from 'antd';
import router from './routes';
import AuthState from './context/Auth/AuhtState';

function App() {
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(true);
  }, [])
  //console.log(process.env.REACT_APP_BACKEND_URL)
  if(load===true){
    return (
      <AuthState>
        <Router>
          <Switch>
            {
              router.map((route,index) => (
                <RouteWithSubRouters key={index} {...route} />
              ))
            }
          </Switch>
        </Router>
      </AuthState>
    );
  }

  return(
    <div >
      <Spin 
          tip="Loading" 
          style={{width: "100%", padding: "200px 0"}}  
          size="large"
      />
    </div>
  )
}

function RouteWithSubRouters(route) {
  //console.log(route);
  return (
    <Route
      path= {route.path}
      exact= {route.exact}
      render={props => <route.component routes={route.subroutes} {...props} />}
    />
  )
}

export default App;
