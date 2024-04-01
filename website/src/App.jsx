import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from "./context/AuthContext";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Header />
                <PrivateRoute path="/" element={<HomePage />} />
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
