import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        let wordLower = word.toLowerCase();
        return wordLower.charAt(0).toUpperCase() + wordLower.slice(1);
    }

    return (
        <div style={{height: '50px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>}
        </div>
    )
}
