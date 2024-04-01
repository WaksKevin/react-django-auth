import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
    // Add your authentication logic here
    const isAuthenticated = false; // Example: You should implement your own logic here

    return (
        <Routes>
            <Route
                {...rest}
                element={
                    isAuthenticated ? <Element /> : <Navigate to="/login" replace />
                }
            />
        </Routes>
    );
};

export default PrivateRoute;
