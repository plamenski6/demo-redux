export const addMovie = (title: any, price: any) => {
    return {
        type: 'ADD_MOVIE',
        payload: { title, price },
    };
};

export const removeMovie = (name: any) => {
    return {
        type: 'REMOVE_MOVIE',
        payload: name,
    };
};
