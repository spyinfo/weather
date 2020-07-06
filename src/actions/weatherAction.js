import * as types from "../constants/types";
import {WEATHER_API} from "../constants/API";
import axios from "axios";

const weatherRequest = () => {
    return {
        type: types.FETCH_WEATHER_REQUEST
    }
}

const weatherSuccess = (weather) => {
    return {
        type: types.FETCH_WEATHER_SUCCESS,
        payload: weather
    }
}

const weatherFailure = (error) => {
    return {
        type: types.FETCH_WEATHER_FAILURE,
        payload: error
    }
}

export const fetchWeather = (city) => {
    return async (dispatch) => {
        dispatch(weatherRequest())
        axios.get(WEATHER_API.replace(':city', city))
            .then(({data}) => {
                setTimeout(() => {
                    dispatch(weatherSuccess(data))
                }, 300)
            })
            .catch((error) => {
                console.error(error)
                if (error.response) {
                    if (error.response.status === 404) {
                        dispatch(weatherFailure(404))
                    } else dispatch(weatherFailure(error))
                } else {
                    dispatch(weatherFailure(error))
                }
            })
    }
}