import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//get all events
function* getEvents() {
    try{
        console.log('in getEvents saga')
        const response = yield axios.get('/api/event');
        console.log('in getEvents server response', response.data);
        yield put({type: 'SET_EVENTS', payload: response.data})
    } catch{
        console.log('error in getEvents')
    }
}

//add new event
function* postEvent(action) {
    try{
        console.log('in postEvent saga with', action.payload)
        yield axios.post('/api/event', action.payload)
        yield put({type: 'GET_EVENTS'})
    } catch(error){
        console.log('error in postEvents')
    }
}
//delete specific events
function* deleteEvent(action) {
    try{
        console.log('in deleteEvent saga with', action.payload)
        yield axios.delete(`/api/event/${action.payload}`)
        yield put({type: 'GET_EVENTS'})
    } catch(error){
        console.log('error in deleteEvents')
    }
}


function* eventSaga() {
    yield takeLatest('GET_EVENTS', getEvents);
    yield takeLatest('POST_EVENT', postEvent);
    yield takeLatest('DELETE_EVENT', deleteEvent);
  }

export default eventSaga;
