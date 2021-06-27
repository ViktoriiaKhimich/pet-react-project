import React from 'react'
import { useSelector, shallowEqual } from 'react-redux';

const RewardsModalContent = () => {

    const gifts = useSelector(state => state.gifts.gifts, shallowEqual);

    // Массив обьектов [{},{},{}]
    // id: 1
    // imageUrl: "https://storage.googleapis.com/kidslikev2_bucket/Rectangle%2025%20(8).png"
    // isSelected: false
    // price: 40
    // title: "Сладости"

    const giftsIds = useSelector(state => state.gifts.giftIds, shallowEqual);

    // Массив айди 
    // [1,4]



    return (
        <>
            <h2>Congratulations! You get:</h2>
        </>
    );
}

export default RewardsModalContent;