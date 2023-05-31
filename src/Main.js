import React from 'react';
import SideBar from './components/SideBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Customers from './pages/Customers';
import Income from './pages/Income';
import Promote from './pages/Promote';
import Help from './pages/Help';

const Main = () => {
    return (
        <div className='main nav w-100'>
            <SideBar />
            <Routes>
                <Route path='/dashboard' element={<Home />} />
                <Route path='/dashboard/product' element={<Product />} />
                <Route path='/dashboard/customers' element={<Customers />} />
                <Route path='/dashboard/income' element={<Income />} />
                <Route path='/dashboard/promote' element={<Promote />} />
                <Route path='/dashboard/help' element={<Help />} />
            </Routes>
        </div>
    );
};

export default Main;