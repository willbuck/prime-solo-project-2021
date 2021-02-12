import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getReflection(){
    try{

    console.log('in getReflection Saga')
    const response = yield axios.get(`/api/reflection`);
    console.log('response from getReflection', response.data);
    yield put({type: 'SET_REFLECTION', payload: response.data})
    }catch(error){
        console.error('error in getReflection', error)
    }
}


function* reflectionSaga() {
    yield takeLatest('REFLECTION', getReflection);
  }

export default reflectionSaga;
