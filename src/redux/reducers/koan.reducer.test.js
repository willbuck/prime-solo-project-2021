import koanReducer from './koan.reducer.js'


describe('testing koanReducer', ()=>{

    //test for all events 'KOAN_DETAILS'
    test('ACTION SET_KOANS', ()=>{
        const initialState = {};
        const action = {type: 'SET_KOANS', payload: ['stuff', 'stuff', 'stuff']}
        expect(koanReducer(initialState, action)).toEqual(action.payload)
    })

    //test for other state
    test('ACTION OTHER_ACTION', ()=>{
        const initialState = ['stuff', 'stuff', 'stuff'];
        const action = {type: 'SET_ANYTHING'};
        expect(koanReducer(initialState, action)).toEqual(initialState)


    })

})
