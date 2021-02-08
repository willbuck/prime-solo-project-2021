import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getKoans() {
    try{
        console.log('in getKoans')
    } catch{
        console.log('error in getKoans')
    }
}
function* postKoan() {
    try{
        console.log('in postKoan')
    } catch{
        console.log('error in postKoans')
    }
}


function* koanSaga() {
    yield takeLatest('GET_KOANS', getKoans);
    yield takeLatest('POST_KOANS', postKoan);
  }

export default koanSaga;
