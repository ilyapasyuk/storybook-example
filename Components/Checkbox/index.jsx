import React from 'react'

const Checkbox = ({label, onChange, isChecked, id}) => {
    return (
        <label htmlFor={id}>
            <input type="checkbox" onChange={(event => onChange(event.target.checked))} checked={isChecked} id={id}/>
            <span>{label}</span>
        </label>
    )
}

export {Checkbox}
