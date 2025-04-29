import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../pages/Auth/Navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <div className="main py-3">
        <Outlet />
      </div>
    </>
  );
};

export default App;
