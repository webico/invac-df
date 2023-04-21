import Navbar from './Navbar';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main className='page'>
        {children}
      </main>
    </> 
  );
};

export default Layout;