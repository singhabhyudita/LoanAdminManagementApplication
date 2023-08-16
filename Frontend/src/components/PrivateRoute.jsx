import React from 'react';
import { Route, Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function PrivateRoute({ renderComponent: Component, ...rest }) {
    const { authenticated } = useAuth();
    return (
        <Route {...rest} render={(props) => authenticated ? (<Component {...props} />) : (<Link to="/login/employee" />)} />
    )
}