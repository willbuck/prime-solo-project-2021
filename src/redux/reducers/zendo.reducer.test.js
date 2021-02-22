import zendoReducer from './zendo.reducer.js'


describe('testing zendoReducer', ()=>{

    //test for all events 'ZENDO_DETAILS'
    test('ACTION SET_USER', ()=>{
        const initialState = {};
        const action = {type: 'ZENDO_DETAILS', payload: {stuff: 'stuff', moreStuff: 'moreStuff', evenMoreStuff: 'evenMoreStuff'}}
        expect(zendoReducer(initialState, action)).toEqual(action.payload)
    })

    //test for other state
    test('ACTION OTHER_ACTION', ()=>{
        const initialState = {username: 'username', moreStuff: 'moreStuffw'};
        const action = {type: 'SET_REFLECTION'};
        expect(zendoReducer(initialState, action)).toEqual(initialState)


    })

})
