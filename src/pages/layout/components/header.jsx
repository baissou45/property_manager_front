import { Auth } from '../../../models/auth';

const TopBar = ({ title }) => {

    const logOut = (e) => {
        e.preventDefault();

        Auth.logout();
        window.location.href = '/login';
    };

  return (
    <div className="topbar">
        <nav className="navbar-custom">

            <div className="search-wrap" id="search-wrap">
                <div className="search-bar">
                    <input className="search-input" type="search" placeholder="Search" />
                    <a href="#" className="close-search toggle-search" data-target="#search-wrap">
                        <i className="mdi mdi-close-circle"></i>
                    </a>
                </div>
            </div>

            <ul className="list-inline float-right mb-0">

                <li className="list-inline-item dropdown notification-list">
                    <a className="nav-link dropdown-toggle arrow-none waves-effect nav-user" data-toggle="dropdown" href="#"
                        role="button" aria-haspopup="false" aria-expanded="false">
                        <img src="assets/images/users/avatar-1.jpg" alt="user" className="rounded-circle" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                        <a className="dropdown-item" href="#" onClick={logOut}><i className="dripicons-exit text-muted"></i> Logout</a>
                    </div>
                </li>
            </ul>


            <ul className="list-inline menu-left mb-0">
                <li className="list-inline-item">
                    <button type="button" className="button-menu-mobile open-left waves-effect">
                        <i className="ion-navicon"></i>
                    </button>
                </li>
                <li className="hide-phone list-inline-item app-search">
                    <h3 className="page-title"> { title } </h3>
                </li>
            </ul>

            <div className="clearfix"></div>
        </nav>
    </div>
  );
};

export default TopBar;
