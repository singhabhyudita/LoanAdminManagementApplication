import { legacy_createStore as createStore } from 'redux';

const initialUserId = sessionStorage.getItem('userId');
const initialUserRole = sessionStorage.getItem('userRole');

const initialState = {
    userId: initialUserId,
    userRole: initialUserRole,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                userId: action.payload.userId,
                userRole: action.payload.userRole,
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

const store = createStore(rootReducer);

export default store;
