import Navbar from 'components/Navbar/Navbar';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <Navbar />
        </div>
      </header>

      <Suspense fallback={<p>...Loading</p>}>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
};
export default SharedLayout;
