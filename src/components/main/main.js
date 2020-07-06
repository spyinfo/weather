import React from "react";
import {connect} from "react-redux";
import wind from "./wind.svg";
import humidity from "./humidity.svg";
import temperature from "./temperature.svg";
import rain from "./weather-images/rain.svg";
import thunderstorm from "./weather-images/thunderstorm.svg";
import snow from "./weather-images/snow.svg";
import clear from "./weather-images/clear sky.svg";
import clouds from "./weather-images/clouds.svg";
import fewClouds from "./weather-images/few clouds.svg";


const Main = ({weather}) => {

    console.log("main", weather)
    let weatherImg = null

    switch (weather.weather[0].main) {
        case 'Thunderstorm':
            weatherImg = <img src={thunderstorm} alt={thunderstorm}/>
            break;
        case 'Drizzle':
        case 'Rain':
            weatherImg = <img src={rain} alt={rain}/>
            break;
        case 'Snow':
            weatherImg = <img src={snow} alt={snow}/>
            break;
        case 'Clear':
            weatherImg = <img src={clear} alt={clear}/>
            break;
        case 'Clouds':
            if (weather.weather[0].id >= 802) {
                weatherImg = <img src={clouds} alt={clouds}/>
            } else if (weather.weather[0].id === 801) {
                weatherImg = <img src={fewClouds} alt={fewClouds}/>
            }
            break;
    }

    // base: "stations"
    // clouds: {all: 40}
    // cod: 200
    // coord: {lon: -0.13, lat: 51.51}
    // dt: 1594028395
    // id: 2643743
    // main: {temp: 16.21, feels_like: 9.56, temp_min: 15.56, temp_max: 17, pressure: 1018, …}
    // name: "London"
    // sys: {type: 1, id: 1414, country: "GB", sunrise: 1594007503, sunset: 1594066713}
    // timezone: 3600
    // visibility: 10000
    // weather: Array(1)
    // 0: {id: 802, main: "Clouds", description: "scattered clouds", icon: "03d"}
    // wind: {speed: 8.2, deg: 290}

    return (
        <div className="main">
            <div className="main__header">
                <h1 className="main__city">{weather.name}</h1>
                <div className="main__base">
                    <div className="main__img">
                        {weatherImg}
                    </div>
                    <div className="main__info">
                        <div
                            className="main__temperature">{weather.main.temp > 0 ? `+${Math.floor(weather.main.temp)}` : Math.floor(weather.main.temp)}°C
                        </div>
                        <div className="main__desc">
                            {weather.weather[0].main}
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__center">
                <div className="main__item">
                    <div className="main__item-info">
                        <img className="main__item-img" src={wind} alt="wind"/>
                    </div>
                    <span>{weather.wind.speed} m/s {weather.wind.deg}°</span>
                </div>
                <div className="main__item">
                    <div className="main__item-info">
                        <img className="main__item-img" src={humidity} alt="wind"/>
                    </div>
                    <span>{weather.main.humidity}%</span>
                </div>
                <div className="main__item">
                    <div className="main__item-info">
                        <img className="main__item-temperature" src={temperature} alt="temperature"/>
                        <small className="main__small">min</small>
                    </div>
                    <span>{Math.floor(weather.main.temp_min)}°C</span>
                </div>
                <div className="main__item">
                    <div className="main__item-info">
                        <img className="main__item-temperature" src={temperature} alt="temperature"/>
                        <small className="main__small">max</small>
                    </div>
                    <span>{Math.floor(weather.main.temp_max)}°C</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weather: state.weatherReducer.value
    }
}

export default connect(mapStateToProps)(Main)

//        "start": "node scripts/start.js",
//         "build": "node scripts/build.js",
//         "test": "node scripts/test.js"