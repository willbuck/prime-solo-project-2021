const reflectionReducer = (state = '', action) => {
    if(action.type === 'SET_REFLECTION'){
        return action.payload[0];
    }
    else {
        return state;
    }
}

export default reflectionReducer;
