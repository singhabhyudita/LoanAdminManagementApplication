import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

export default function ProtectedRoute({ element, allowedRoles }) {
    const userRole = useSelector(state => state.userRole);

    if (!userRole) {
        return <Navigate to="/login/employee" />;
    }

    if (allowedRoles && !allowedRoles.includes(userRole)) {
        return <Navigate to="/login/employee" />;
    }

    return element;
}
