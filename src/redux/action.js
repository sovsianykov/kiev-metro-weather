import {GET_HOME_WEATHER, GET_PRECIPITATION_WEATHER, GET_TOMORROW_WEATHER} from "./types";



export function fetchWeather(selectedUrl ) {

    return  async dispatch =>
    {
        const response = await fetch(selectedUrl)
            .then(response => response.json())
        dispatch({type: GET_HOME_WEATHER, payload : response.main})
        dispatch({type: GET_PRECIPITATION_WEATHER, payload : response.weather[0]})


    }
}
