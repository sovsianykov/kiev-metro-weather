import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./redux/rootReducer";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

window.store = store;

console.log(store.getState());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>

            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
