import React from 'react'
import PropTypes from 'prop-types';

const PlansListItem = ({ title, reward, imageUrl }) => {
    return (<li>
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>{reward} points</p>
    </li>);
}

export default PlansListItem;