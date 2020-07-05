import React from "react";
import {connect} from "react-redux";
import rain from "./rain.svg";
import wind from "./wind.svg";
import humidity from "./humidity.svg";

const Main = ({weather}) => {

    console.log("main", weather)

    return (
        <div className="main">
            <div className="main__header">
                <h1 className="main__city">Moscow</h1>
                <div className="main__base">
                    <div className="main__img">
                        <img src={rain} alt="img"/>
                    </div>
                    <div className="main__info">
                        <div className="main__temperature">+23°C</div>
                        <div className="main__desc">
                            Thunderstorm
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__center">
                <div className="main__item">
                    <div className="main__item-info">
                        <img src={wind} alt="wind"/>
                    </div>
                    <span>12,3 m/s 260°</span>
                </div>
                <div className="main__item">
                    <div className="main__item-info">
                        <img src={humidity} alt="wind"/>
                    </div>
                    <span>75%</span>
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