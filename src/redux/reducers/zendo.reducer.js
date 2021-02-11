const zendoReducer = (state = {}, action) => {
    if(action.type === 'ZENDO_DETAILS'){
        return action.payload;
    }
    else{
        return state;
    }
  };

  // user will be on the redux state at:
  // state.user
  export default zendoReducer;
