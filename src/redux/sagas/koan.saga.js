import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//get all koans
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
        yield axios.post(`/api/koan/${action.payload}`)
        yield put({type: 'GET_KOANS'})
    } catch(error){
        console.log('error in deleteKoans')
    }
}


function* koanSaga() {
    yield takeLatest('GET_KOANS', getKoans);
    yield takeLatest('POST_KOAN', postKoan);
    yield takeLatest('DELETE_KOAN', deleteKoan);
  }

export default koanSaga;
