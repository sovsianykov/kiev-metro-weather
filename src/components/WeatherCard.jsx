import React from "react";
import { useSelector } from "react-redux";

import InputStation from "./InputStation";

function WeatherCard() {
    const temperature = useSelector(
        (state) => state.homeWeatherReducer.currentHomeWeather.temp
    );
    const fills_like = useSelector(
        (state) => state.homeWeatherReducer.currentHomeWeather.feels_like
    );
    const precip = useSelector(
        (state) => state.homeWeatherReducer.currentHomePrecipitation.main
    );

    return (
        <>
            <div className="weathercard"  >
                <h1>Kiev Metro WEATHER</h1>
                <h3>Current air T</h3>
                <h2>{temperature} </h2>
                <h5>FILLS LIKE</h5>
                <h2>{fills_like} </h2>
                <h2>{precip}</h2>
                <InputStation />
            </div>
        </>
    );
}
export default WeatherCard;
