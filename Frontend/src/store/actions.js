export const setUser = (userId, userRole) => {
    return {
        type: 'SET_USER',
        payload: {
            userId,
            userRole,
        },
    };
}

export const logout = () => {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userRole');
    return {
        type: 'LOGOUT',
    };
};