import Navbar from './Navbar';

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