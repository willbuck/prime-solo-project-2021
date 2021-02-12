import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//get all koans for admin
function* getKoans() {
    try{
        console.log('in getKoans')
        const response = yield axios.get('/api/koan');
        console.log('in getKoans server response', response.data);
        yield put({type: 'SET_KOANS', payload: response.data})
    } catch{
        console.log('error in getKoans')
    }
}
//get single koan for user
function* getKoan() {
    try{
        console.log('in getKoan for user')
        const response = yield axios.get('/api/koan/user');
        console.log('in getKoan for user server response', response.data);
        yield put({type: 'SET_KOANS', payload: response.data})
    } catch{
        console.log('error in getKoan for user')
    }
}

//add new koan
function* postKoan(action) {
    try{
        console.log('in postKoan saga with', action.payload)
        yield axios.post('/api/koan', action.payload)
        yield put({type: 'GET_KOANS'})
    } catch(error){
        console.log('error in postKoans')
    }
}
//delete specific koans
function* deleteKoan(action) {
    try{
        console.log('in deleteKoan saga with', action.payload)
        yield axios.delete(`/api/koan/${action.payload}`)
        yield put({type: 'GET_KOANS'})
    } catch(error){
        console.error('error in deleteKoans')
    }
}

function* saveKoan(action){
    try{
        console.log('in save koan');
        const response = yield axios.post('/api/koan/save', action.payload);
        console.log('server responding to saveKoan', response);
    }catch(error){
        console.error('error saving koan for user', error)
    }
}


function* koanSaga() {
    yield takeLatest('GET_KOANS', getKoans);
    yield takeLatest('GET_KOAN', getKoan);
    yield takeLatest('POST_KOAN', postKoan);
    yield takeLatest('DELETE_KOAN', deleteKoan);
    yield takeLatest('SAVE_KOAN', saveKoan);
  }

export default koanSaga;
