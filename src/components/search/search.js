import React, {Component} from "react";

export default class Search extends Component {
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
    }

    render() {
        return (
            <form className="search" onSubmit={this.onSubmit}>
                <div className="search__layout">
                    <input type="text"
                           placeholder="I live in..."
                           className="search__input"
                           autoComplete="off"
                           maxLength="64"
                           onChange={this.onChange}
                           value={this.state.value}
                    />
                    <button type="submit" className="search__btn">Search</button>
                </div>
            </form>
        )
    }
}