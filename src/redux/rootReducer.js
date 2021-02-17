import { homeWeatherReducer } from "./homeWeatherReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    homeWeatherReducer: homeWeatherReducer,
});
