import { put, takeEvery } from 'redux-saga/effects'
import { fetchCoords, setPolyline } from '../slices/polylineSlice'
import { fetchRoute } from '../../HTTP/fetchRoute'


function* fetchRouteSaga(action) {
    try {
        const polyline = yield fetchRoute(...action.payload)
        yield put(setPolyline(polyline))
    } catch (error) {
        console.log(error)
    }
}

export function* watchFetchRoute() {
    yield takeEvery(fetchCoords, fetchRouteSaga)
}