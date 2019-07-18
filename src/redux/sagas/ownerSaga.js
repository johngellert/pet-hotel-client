import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* postOwner(action) {
     const response = yield axios.post('php-pet-hotel-server/post-owner/index.php', action.payload)
      console.log('response:', response)
    }

function* ownerSaga() {
  yield takeLatest('POST_PET_OWNER', postOwner);
}

export default ownerSaga;
