import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    latlng1: [],
    latlng2: [],
    center: [59.8411404999, 30.33780299]
}

export const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        newRoute: (state, action) => {
            state.latlng1 = action.payload.latlng1
            state.latlng2 = action.payload.latlng2
            state.center = [(action.payload.latlng1[0] + action.payload.latlng2[0]) / 2, (action.payload.latlng1[1] + action.payload.latlng2[1]) / 2]
        }
    }
})

export const { newRoute } = routeSlice.actions

export default routeSlice.reducer