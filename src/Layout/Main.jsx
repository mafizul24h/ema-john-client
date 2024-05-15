import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBer from '../components/Shared/NavBer/NavBer';

const Main = () => {
    return (
        <div>
            <NavBer />
            <Outlet />
        </div>
    );
};

export default Main;