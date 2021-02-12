import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getCalendar(){
    try{
    const now = new Date().getTime();
    console.log('in getCalendar Saga')
    const response = yield axios.get(`/api/calendar/${now}`);
    console.log('response from getCalendar', response.data);
    yield put({type: 'SET_CALENDAR', payload: response.data})
    }catch(error){
        console.error('error in getCalendar', error)
    }
}


function* calendarSaga() {
    yield takeLatest('GET_CALENDAR', getCalendar);
  }

export default calendarSaga;
