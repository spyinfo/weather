import React from "react";
import {connect} from "react-redux";

const Main = ({weather}) => {

    console.log("main", weather)

    return (
        <div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weather: state.weatherReducer.value
    }
}

export default connect(mapStateToProps)(Main)