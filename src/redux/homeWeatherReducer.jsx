
import {GET_HOME_WEATHER,GET_TOMORROW_WEATHER, GET_PRECIPITATION_WEATHER} from "./types";

const initialState = {
    weather  : [],
    currentHomeWeather : [],
    currentHomePrecipitation : [],
    activeStation : { id: 1 , station: 'Akademmistechko', lat: 50.46, lon: 30.38 },
    metroStations : [
        {id: 1 , station: 'Akademmistechko', lat: 50.46, lon: 30.38 },
        {id: 2 , station: 'Zhytomyrska', lat: 50.27, lon: 30.21 },
        {id: 3 , station: 'Sviatoshyn', lat: 50.27, lon: 30.23 },
        {id: 4 , station: 'Nyvky', lat: 50.27, lon: 30.24 },
        {id: 5 , station: 'Akademmistechko', lat: 50.46, lon: 30.38 },
        {id: 6 , station: 'Akademmistechko', lat: 50.46, lon: 30.38 },
        {id: 7 , station: 'Akademmistechko', lat: 50.46, lon: 30.38 },
        {id: 8 , station: 'Akademmistechko', lat: 50.46, lon: 30.38 },
        {id: 9 , station: 'Akademmistechko', lat: 50.46, lon: 30.38 },
        {id: 10 , station: 'Akademmistechko', lat: 50.46, lon: 30.38 },
        {id: 11 , station: 'Akademmistechko', lat: 50.46, lon: 30.38 }
    ]
}

export const homeWeatherReducer = (state = initialState, action) => {
    let stationUrl  = `${state.activeStation.lat}`+'&'+ `${state.activeStation.lon}`
    switch (action.type) {
        case GET_HOME_WEATHER : return { ...state, currentHomeWeather: action.payload}
        case GET_PRECIPITATION_WEATHER : return { ...state, currentHomePrecipitation: action.payload}
        default :
            return state

    }
}
