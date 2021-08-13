import axios from 'axios';

// export const fetchUsersRequest = () => {
//     return {
//         type: 'FETCH_USERS_REQUESТ',
//     };
// };

export const fetchSuccess = (users: any) => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        payload: users,
    };
};

export const fetchError = (error: any) => {
    return {
        type: 'FETCH_USERS_ERROR',
        payload: error,
    };
};

export const fetchData = () => {
    return (dispatch: any) => {
        // dispatch(fetchUsersRequest);
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data;
                dispatch(fetchSuccess(users));
            })
            .catch((error) => {
                dispatch(fetchError(error.message));
            });
    };
};
