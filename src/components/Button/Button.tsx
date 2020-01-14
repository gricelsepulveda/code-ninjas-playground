import React, { useRef } from "react"


const Button = (props: any) => {
    const buttonElement = useRef(null)

    const handleClick = () => {
        if (props.onclick != undefined) {
            props.onclick(buttonElement)
        }
    }

    const handleMouseOver = () => {
    }

    const handleMouseOut = () => {
    }

    return (
        <div className={`gc-button-component ${props.disabled ? "disabled": ""} ${props.size} ${props.kind} ${props.color} ${props.active ? "active" : ""}`} style={{width: `${props.width ? props.width : "auto"}`}}>
            <button name={props.name} ref={props.reference ? props.reference : buttonElement} type="button" onClick={() => handleClick()} value={props.value ? props.value : undefined} onMouseOver={() => props.onMouseOver != undefined ? props.onMouseOver() : handleMouseOver() } onMouseOut={() => props.onMouseOut != undefined ? props.onMouseOut() : handleMouseOut()}>
                {
                    props.icon != undefined ? (
                        <i className={`gc-font ${props.icon}`}></i>
                    )
                    : null
                }
                {props.kind != "icon" ? props.value : ""}
            </button>
        </div>
    )
}

Button.defaultProps = {
    value: "click me",
    kind: "normal",
    icon: undefined,
    color: "primary",
    size: "normal",
    disabled: false,
    active: false,
    name: "",
    onclick: undefined
}

export default Button