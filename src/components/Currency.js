import React, { useState, useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function Currency () {
    const { dispatch, currency } = useContext(AppContext)
    const [isToggled, setIsToggled] = useState(false)

    const currencySymbol = (curr) => {
        switch(curr){
            case "£":
                return 'Pound'
            case "$":
                return 'Dollar'
            case "Є":
                return 'Euro'
            case "₹":
                return 'Ruppee'
            default:
                return ''
        }
    }

    return(
        <div className="position-relative">
            <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle bg-success" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => setIsToggled(prev => !prev)}>
                Currency {`(${currency} ${currencySymbol(currency)})`}
            </button>
            <div className={`dropdown-menu bg-success ${isToggled ? 'show' : ''}`} aria-labelledby="dropdownMenuButton" onClick={() => setIsToggled(false)}>
                <a className="dropdown-item" href="#" onClick={() => dispatch({ type: 'CHG_CURRENCY', payload: '$' })}>$ Dollar</a>
                <a className="dropdown-item" href="#" onClick={() => dispatch({ type: 'CHG_CURRENCY', payload: "£" })}>£ Pound</a>
                <a className="dropdown-item" href="#" onClick={() => dispatch({ type: 'CHG_CURRENCY', payload: 'Є' })}>Є Euro</a>
                <a className="dropdown-item" href="#" onClick={() => dispatch({ type: 'CHG_CURRENCY', payload: '₹' })}>₹ Ruppee</a>
            </div>
            </div>
        </div>
    )
}