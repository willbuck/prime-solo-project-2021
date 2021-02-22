//we're testing the userReducer

import userReducer from './user.reducer.js'


describe('testing userReducer', ()=>{
    //tests go inside the describe block
    //we want to test the three cases in the userReducer switch statement

    //'SET_USER'
    test('ACTION SET_USER', ()=>{
        const initialState = {};
        const action = {type: 'SET_USER', payload: {username: 'username'}}
        expect(userReducer(initialState, action)).toEqual(action.payload)

    })

    //'UNSET_USER'
    test('ACTION UNSET_USER', ()=>{
        const initialState = {username: 'username'};
        const action = {type: 'UNSET_USER'}

        expect(userReducer(initialState, action)).toEqual({})
    })


    //OTHER_ACTION
    test('ACTION OTHER_ACTION', ()=>{
        const initialState = {username: 'username'};
        const action = {type: 'SET_REFLECTION'};
        expect(userReducer(initialState, action)).toEqual(initialState)


    })






})
