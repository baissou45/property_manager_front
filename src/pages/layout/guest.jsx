import { Outlet, useNavigation } from 'react-router-dom'
import AuthLayout from './auth';
import { Auth } from '../../models/auth';

export default function Loading() {
    const { state } = useNavigation();

    return (
        <>
            {
                (state == 'loading' || state == 'submitting')
                    ?   <div className="d-flex justify-content-center align-items-center">
                            <div className="preloader">
                                <div id="status"><div className="spinner"></div></div>
                            </div>
                        </div>
                    : <Outlet />
            }
        </>
    )
}

export function AuthElement(){

    if (!Auth.isAuthenticated()) {
        window.location.href = '/login';
    } else {
        const authData = Auth.authData();
        if (authData.user && authData.user.hotel === null) {
            window.location.href = '/new-hotel';
        }
    }

    return (
        <AuthLayout title='Dashboard'>
            <Outlet />
        </AuthLayout>
    )
}


export function GuestElement(){
    return <Outlet />;
}
