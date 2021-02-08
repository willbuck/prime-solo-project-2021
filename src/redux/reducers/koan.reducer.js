//stores a list of all koans from database, sends to admin
export default koanReducer = (state = [], action) => {
    if(action.type === 'SET_KOAN'){
        return action.payload;
    }
    else {
        return state;
    }
}
