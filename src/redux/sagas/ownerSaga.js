import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* postOwner() {
    //  yield axios.post('')
}

function* ownerSaga() {
  yield takeLatest('POST_PET_OWNER', postOwner);
}

export default userSaga;
