import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//get all events for admin
function* getEvents(action) {
    try{
        console.log('in getEvents saga')
        const response = yield axios.get(`/api/event/${action.payload}`);
        console.log('in getEvents server response', response.data);
        yield put({type: 'SET_EVENTS', payload: response.data})
    } catch{
        console.error('error in getEvents')
    }
}

//get all events for user
function* getEventsUser(action) {
    try{
        console.log('in getEventsUser saga with payload', action.payload)
        const response = yield axios.get(`/api/event/user/${action.payload}`);
        console.log('in getEventsUser server response', response.data);
        yield put({type: 'SET_EVENTS', payload: response.data})
    } catch{
        console.error('error in getEvents')
    }
}
//updates event and user_event with attendance information
function* updateEvent(action) {
    try{
        if(action.payload.left){
        console.log('in updateEvent LEFT saga with payload', action.payload);
        const response = yield axios.put(`/api/update/left`, action.payload);
        console.log('response from updateEvent server', response)

        }
        else{
        console.log('in updateEvent saga with payload', action.payload);
        yield axios.put(`/api/update/`, action.payload);
        yield axios.post(`/api/update/`, action.payload);
        }

    }catch(error){
        console.error('error in updating event saga')
    }
}

//gets all completed events for admin records view
function* getRecords(action) {
    try{
        console.log('in getRecords saga')
        const response = yield axios.get(`/api/event/records/${action.payload}`);
        console.log('in getRecords server response', response.data);
        yield put({type: 'SET_EVENTS', payload: response.data})
    } catch{
        console.error('error in getRecords')
    }
}

//add new event
function* postEvent(action) {
    try{
        console.log('in postEvent saga with', action.payload)
        yield axios.post('/api/event', action.payload)
        const now = new Date().getTime()
        yield put({type: 'GET_EVENTS', payload: now})
    } catch(error){
        console.error('error in postEvents')
    }
}
//delete specific events
function* deleteEvent(action) {
    try{
        console.log('in deleteEvent saga with', action.payload)
        yield axios.delete(`/api/event/${action.payload}`)
        const now = new Date().getTime()
        yield put({type: 'GET_EVENTS', payload: now})
    } catch(error){
        console.error('error in deleteEvents')
    }
}


function* eventSaga() {
    yield takeLatest('GET_EVENTS', getEvents);
    yield takeLatest('GET_USER', getEventsUser);
    yield takeLatest('POST_EVENT', postEvent);
    yield takeLatest('DELETE_EVENT', deleteEvent)
    yield takeLatest('UPDATE_EVENT', updateEvent)
    yield takeLatest('GET_RECORDS', getRecords);
  }

export default eventSaga;
