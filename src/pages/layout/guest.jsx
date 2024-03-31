import { Outlet, useNavigation } from 'react-router-dom'
import AuthLayout from './auth';
import { Auth } from '../../models/auth';

export function AuthElement(){
    const { state } = useNavigation();

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
            {
                state === 'loading' || state === 'submitting'
                    ?   <div className="d-flex justify-content-center align-items-center">
                            <div className="preloader">
                                <div id="status"><div className="spinner"></div></div>
                            </div>
                        </div>
                    : <Outlet />
            }
        </AuthLayout>
    )
}


export function GuestElement(){
    const { state } = useNavigation();

    // if (state === 'loading' || state === 'submitting') {
    //     console.log("Loading");
    // }

    // if (Auth.isAuthenticated()) {
    //     window.location.href = '/dashboard';
    // }

    return (
        <>
            {
                state === 'loading' || state === 'submitting'
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
