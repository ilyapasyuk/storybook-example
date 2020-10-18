import React from 'react'
import PropTypes from 'prop-types'

const CheckBox = ({label, isChecked, id, onClick}) => {
    return (
        <label htmlFor={id}>
            <input type="checkbox" id={id} checked={isChecked} onChange={onClick}/> <span>{label}</span>
        </label>
    )
}

CheckBox.propTypes = {
    /**
     * Is general props for this component
     */
    label: PropTypes.string,
    isChecked: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

CheckBox.defaultProps = {
    label: 'Checkbox'
}

export {CheckBox}