import React from 'react'
import PropTypes from 'prop-types';

const Button = ({ className, children, ...props }) => {
    return <button className={className} {...props}>{children}</button>;
}

Button.defaultProps = {
    className: '',
    type: 'submit',
    onClick: () => { }
}

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;