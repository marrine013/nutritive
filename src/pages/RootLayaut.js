import { Outlet } from 'react-router-dom';

import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';

const RootLayaut = () => {
  return (
    <div className='page-wrapper'>
      <Header />
      <main className='main-content'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayaut;
