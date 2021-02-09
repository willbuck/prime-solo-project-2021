//stores a list of all koans from database, sends to admin
const koanReducer = (state = [], action) => {
    if(action.type === 'SET_KOANS'){
        return action.payload;
    }
    else {
        return state;
    }
}

export default koanReducer;
