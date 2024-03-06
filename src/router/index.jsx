import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from '../pages/auth/Login'
import Dashboard from '../pages/admin/Dashboard'
import AuthLayout from '../layouts/AuthLayouts';
import AdminLayout from '../layouts/AdminLayout';

const AppRouter = () => (
    <Router>
        <Routes>
            {/* <Route path="/" element={React.createElement(AuthLayout, { Login: 'Login' }, <Login />)} /> */}
            <Route exact path="/" element={<AuthLayout><Login  title="Login1"/></AuthLayout>} />
            <Route path="/login" element={<AuthLayout><Login  title="Login"/></AuthLayout>} />
            <Route path="/dashboard" element={<AdminLayout><Dashboard  title="Dashboard"/></AdminLayout>} />
        </Routes>
    </Router>
)
export default AppRouter;
