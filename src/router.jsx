
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home';
import Error404 from './pages/errors/404';
import { Login } from './pages/login';
import { Register } from './pages/register';
import Dashboard from './pages/dashboard';
import Hotel from './models/hotel';
import HotelShow from './pages/room/show';
import { AuthElement, GuestElement } from './pages/layout/guest';
import { NewHotel } from './pages/new_hotel';
import RoomIndex from './pages/room';
import { Room } from './models/room';
import RoomShow from './pages/room/show';


const router = createBrowserRouter([
    {
        path: '/new-hotel',
        element : <NewHotel />,
    },
    {
      path: '/',
      errorElement : <Error404 />,
      element : <GuestElement />,
      children : [
        {
            path: '/',
            element : <Home />,
        },
        {
            path: '/login',
            element : <Login />,
        },
        {
            path: '/register',
            element : <Register />,
        },
      ]
    },
    {
        path:'/',
        element : <AuthElement />,
        children : [
            {
                path: 'dashboard',
                element : <Dashboard />,
            },
            {
                path: 'rooms',
                children: [
                    {
                        path: '',
                        element : <RoomIndex />,
                        loader: () => Room.get_all(),
                    },
                    {
                        path: ':id',
                        element : <RoomShow />,
                        loader: ({ params }) => Room.get_by_id(params.id),
                    },
                ]
            },
        ]
    }
])

export default router;


