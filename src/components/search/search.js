import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchWeather} from "../../actions/weatherAction";


class Search extends Component {
    state = {
        value: ''
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        this.props.fetchWeather(this.state.value)
    }

    render() {

        const {loading} = this.props.state.weatherReducer

        return (
            <form className="search" onSubmit={this.onSubmit}>
                <div className="search__layout">
                    <input type="text"
                           placeholder="I live in..."
                           className="search__input"
                           autoComplete="off"
                           maxLength="64"
                           onChange={this.onChange}
                           value={this.state.value}/>
                    <button type="submit" className="search__btn" disabled={loading}>
                        {
                            loading ?
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                : 'Search'
                        }
                    </button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = {
    fetchWeather
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)