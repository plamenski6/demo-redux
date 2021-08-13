const counterReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [...state, { name: action.payload.title, price: `$${action.payload.price}` }];
        case 'REMOVE_MOVIE':
            return state.filter((item: any) => item.name !== action.payload);
        default:
            return state;
    }
};

export default counterReducer;
