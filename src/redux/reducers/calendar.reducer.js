const calendarReducer = (state = [], action) => {
    if(action.type === 'SET_CALENDAR'){
        return action.payload;
    }
    else {
        return state;
    }
}

export default calendarReducer;
