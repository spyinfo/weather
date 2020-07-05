import * as types from "../constants/types";

const initialState = {
    value: {},
    loading: false,
    error: null
}


export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.FETCH_WEATHER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case types.FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                value: action.payload,
                loading: false
            }

        case types.FETCH_WEATHER_FAILURE:
            return {
                ...state,
                value: {},
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}