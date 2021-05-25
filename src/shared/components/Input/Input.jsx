import React from 'react';
import PropTypes from 'prop-types';
import { inputTypeOptions } from './inputTypes'

const Input = ({ className, ...props }) => {
    return (<input className={className} {...props} />);
}

Input.defaultProps = {
    className: '',
    placeholder: '',
    name: '',
    type: 'text',
    value: '',
    required: false,
    onChange: () => { }
}

Input.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(inputTypeOptions),
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default Input;