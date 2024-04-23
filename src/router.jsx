
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home';
import Error404 from './pages/errors/404';
import { Login } from './pages/login';
import { Register } from './pages/register';
import Dashboard from './pages/dashboard';
import Loading, { AuthElement } from './pages/layout/guest';
import RoomIndex from './pages/room';
import { Room } from './models/room';
import RoomShow from './pages/room/show';
import RoomCreate from './pages/room/create';
import { NewHotel } from './pages/new_hotel';


const router = createBrowserRouter([
    {
        path: '/',
        element : <Loading />,
        errorElement : <Error404 />,
        children: [
            {
                path: '/',
                element : <Home />,
            }, {
                path: '/new-hotel',
                element : <NewHotel />,
            }, {
                path: '/login',
                element : <Login />,
            }, {
                path: '/register',
                element : <Register />,
            }, {
                path:'/',
                element : <AuthElement />,
                children : [
                    {
                        path: 'dashboard',
                        element : <Dashboard />,
                    }, {
                        path: 'rooms',
                        children: [
                            {
                                path: '',
                                element : <RoomIndex />,
                                loader: () => Room.get_all(),
                            }, {
                                path: ':id',
                                element : <RoomShow />,
                                loader: ({ params }) => Room.get_by_id(params.id),
                            }, {
                                path: 'create',
                                element : <RoomCreate />,
                            },
                        ]
                    },
                ]
            }
        ]
    },
])

export default router;


