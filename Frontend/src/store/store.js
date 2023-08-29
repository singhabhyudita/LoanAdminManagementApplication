import { legacy_createStore as createStore } from 'redux';

const initialUserId = sessionStorage.getItem('userId');
const initialUserRole = sessionStorage.getItem('userRole');
const initialUserName = sessionStorage.getItem('userName');

const initialState = {
    userId: initialUserId,
    userRole: initialUserRole,
    userName : initialUserName
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                userId: action.payload.userId,
                userRole: action.payload.userRole,
                userName: action.payload.userName
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

const store = createStore(rootReducer);

export default store;
