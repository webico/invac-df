import Navbar from './Navbar';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <div className="content_body">
        <Navbar />

        <main className='page'>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;