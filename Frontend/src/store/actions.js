export const setUser = (userId, userRole, userName) => {
    return {
        type: 'SET_USER',
        payload: {
            userId,
            userRole,
            userName
        },
    };
}

export const logout = () => {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userRole');
    sessionStorage.removeItem('userName');
    return {
        type: 'LOGOUT',
    };
};