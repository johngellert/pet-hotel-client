import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getPets() {
    try {
        const getResponse = yield axios.get('php-pet-hotel-server/get-join/index.php');
        yield put({ type: 'CLEAR_PETS' }); //clear reducer
        yield put({ type: 'SET_PETS', payload: getResponse.data }) //set reducer
    } catch (error) {
        console.log('GET pets request failed', error);
    }
}

function* addPet(action) {
    try {
        yield axios.post('php-pet-hotel-server/post-pet/index.php', action.payload);
        yield put({ type: 'CLEAR_PETS' });
        yield put({ type: 'GET_PET_HISTORY' });
    } catch (error) {
        console.log('POST pet request failed', error);
    }
}

function* updatePet(action) {
    try {
        //yield axios.put(`PHP URL`+ action.payload.id, action.payload);
        //yield put({type: 'CLEAR_PETS'});
        //yield put({type: 'GET_PET_HISTORY'})
    } catch (error) {
        console.log('PUT pet request failed', error);
    }
}

function* deletePet(action) {
    try {
        //yield axios.delete('PHP URL' + action.payload.id);
        //yield put({ type: 'CLEAR_PETS' });
        //yield put({ type: 'GET_PET_HISTORY', payload: action.payload.user });
    } catch (error) {
        console.log('error deleting goodboi', error);
    }
}

function* petSaga() {
    yield takeLatest('ADD_NEW_PET', addPet);
    yield takeLatest('GET_PET_HISTORY', getPets);
    yield takeLatest('CHECK_IN_OUT_PET', updatePet);
    yield takeLatest('DELETE_PET', deletePet);
}
export default petSaga;
