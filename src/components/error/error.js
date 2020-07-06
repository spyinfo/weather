import React from "react";

export const Error = ({message}) => {
    return (
        <div className="main">
            <h2 style={{textAlign: 'center'}}>{message}</h2>
        </div>
    )
}