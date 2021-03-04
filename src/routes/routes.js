//importar layout
import LayoutAdmin from '../layouts/LayoutAdmin'

import LayoutWeb from '../layouts/LayoutWeb'


//importar Admin pages
import AdminHome from '../pages/Admin';
import AdminSignIn from '../pages/Admin/SignIn.page';
import Tecnology from '../pages/Admin/Tecno.page';
import AboutMe from '../pages/Admin/About.page';
import Project from '../pages/Admin/Project.page';

//importar web pages
import Home from '../pages/Home';
import Tecno from '../pages/TecnoPage'
import Contact from '../pages/ContactPage'
import ProjectWeb from '../pages/ProjectPage'

//shared pages
import Error404 from '../pages/Error404';

const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        subroutes: [
            {
                path: "/admin",
                component: AdminHome,
                exact: true
            },
            {
                path: "/admin/signin",
                component: AdminSignIn,
                exact: true
            },
            {
                path: "/admin/tecno",
                component: Tecnology,
                exact: true
            },
            {
                path: "/admin/about",
                component: AboutMe,
                exact: true
            },
            {
                path: "/admin/project",
                component: Project,
                exact: true
            },
            {
                component: Error404
            }
        ]
    },{
        path: "/",
        component: LayoutWeb,
        exact: false,
        subroutes:[
            {
                path:"/",
                component: Home,
                exact: true
            },
            {
                path:"/tecno",
                component: Tecno,
                exact: true
            },
            {
                path:"/project",
                component: ProjectWeb,
                exact: true
            },
            {
                path:"/contact",
                component: Contact,
                exact: true
            },

            {
                component: Error404
            }
        ]
    }
]


export default routes;