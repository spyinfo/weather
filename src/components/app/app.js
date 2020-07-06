import React from "react";
import Search from "../search/search";
import Main from "../main/main";
import {Error} from "../error/error";
import {connect} from "react-redux";

const App = ({value, error}) => {

    let errorRender = null;

    if (error === 404) {
        errorRender = <Error message="Такой город не существует!"/>
    } else if (error != null) {
        errorRender = <Error message="Произошла ошибка!"/>
    }

    return (
        <div style={{padding: '0 10px'}}>
            <Search/>
            {Object.keys(value).length ? <Main/> : errorRender}
        </div>
    )
}

const mapStateToProps = (state) => {

    const {weatherReducer} = state;

    return {
        value: weatherReducer.value,
        error: weatherReducer.error
    }
}

export default connect(mapStateToProps)(App)