import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    polyline: []
}

export const polylineSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        setPolyline: (state, action) => {
            state.polyline = action.payload
        },
        fetchCoords: () => {
        }
    }
})

export const { setPolyline, fetchCoords } = polylineSlice.actions

export default polylineSlice.reducer