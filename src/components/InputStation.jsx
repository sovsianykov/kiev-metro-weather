import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { MetroStations } from "./StationsList";
import { fetchWeather } from "../redux/action";
import Option from "./Option";

export default function InputStation() {
    const dispatch = useDispatch();

    const onSelectHandler = () => {
        const option = document.querySelectorAll("option");
        option.forEach((option) => {
            if (option.selected) {
                console.log(option.innerText);
                console.log(MetroStations);

                let selectedStation = MetroStations.find(
                    (obj) => obj.station === option.innerText
                );
                console.log(selectedStation);
                let selectedUrl =
                    "https://api.openweathermap.org/data/2.5/weather?lat=" +
                    selectedStation.lat +
                    "&lon=" +
                    selectedStation.lon +
                    "&appid=d409c3b0705292f3d52ab9675afd8d8e&units=metric";
                console.log(selectedUrl);
                dispatch(fetchWeather(selectedUrl));
            }
        });
    };
    useEffect(
        () =>
            dispatch(
                fetchWeather(
                    "https://api.openweathermap.org/data/2.5/weather?lat=50.37961&lon=30.36742&appid=d409c3b0705292f3d52ab9675afd8d8e&units=metric"
                )
            ),
        []
    );

    return (
        <>
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control onChange={onSelectHandler} as="select">
                        <option>select station</option>
                        {MetroStations.map((st) => {
                            return (
                                <Option
                                    key={st.id}
                                    onClick={onSelectHandler}
                                    children={st.station}
                                />
                            );
                        })}
                    </Form.Control>
                </Form.Group>
            </Form>
        </>
    );
}
