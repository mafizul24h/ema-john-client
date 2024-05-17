import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <h4>Loading...</h4>
    } else if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={{from: location}} replace />;
};

export default PrivateRoute;