import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const isAuthenticated = false;
    console.log("Private Route works")

    return (
        <>
            {!isAuthenticated ? (<Navigate to="/login"  />):
                (
                    <Routes>
                        <Route {...rest}>{children}</Route>
                    </Routes>
                )
            }
        </>
    );
};

export default PrivateRoute;