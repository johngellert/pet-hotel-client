//import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getPets() {
    try {
       // const getResponse = yield axios.get('PHP URL');
       // yield put({type: 'CLEAR_PETS'}); //clear reducer
       // yield put({ type: 'SET_PETS', payload: getResponse.data }) //set reducer
    }catch (error) {
        console.log('GET pets request failed', error);
    }
}

function* addPet() {
    try {
        //  yield axios.post('PHP URL', action.payload);
        //  yield put({type: 'CLEAR_PETS'});
        //  yield put({ type: 'GET_PET_HISTORY' });
    } catch (error) {
        console.log('POST pet request failed', error);
    }
}
function* petSaga() {
    yield takeLatest('ADD_NEW_PET', addPet);
    yield takeLatest('GET_PET_HISTORY', getPets);
}
    export default petSaga;