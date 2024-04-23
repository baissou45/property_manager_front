import Sidebar from './components/sidebar';
import TopBar from './components/header';

const AuthLayout = ({ children, title }) => {
  return (
    <>
      <Sidebar />
      <div className="content-page">
        <div className="content">
          <TopBar title={title} />

          <div className="page-content-wrapper">
            {children}
          </div>

        </div>
        <footer className="footer">
          © 2024
        </footer>
      </div>
    </>
  );
};

export default AuthLayout;