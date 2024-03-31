import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
      <div className="left side-menu">

        <div className="topbar-left">
            <div className="">
                <a href="/dashboard" className="logo">
                  <img src="assets/images/logo.png" height="20" alt="logo" />
                </a>
            </div>
        </div>

        <div className="sidebar-inner slimscrollleft">
            <div id="sidebar-menu">
                <ul>

                    <li className="menu-title">Main</li>

                    <li>
                        <NavLink to="/dashboard" className="waves-effect"><i className="dripicons-device-desktop"></i><span> Dashboard </span></NavLink>
                    </li>

                    <li className="menu-title">Rooms</li>

                    <li>
                        <NavLink to="/rooms" className="waves-effect"><i className="dripicons-home"></i><span> Room liste </span></NavLink>
                    </li>

                    <li>
                        <NavLink to="/rooms" className="waves-effect"><i className="dripicons-home"></i><span> New room </span></NavLink>
                    </li>

                </ul>
            </div>
            <div className="clearfix"></div>
        </div>

      </div>
  );
};

export default Sidebar;
