import React from 'react';
import { SvgXml } from 'react-native-svg';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';


const BelowIcon = ({ width = widthPercentageToDP(60), height = heightPercentageToDP(60) }) => {
    const svg = `<svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 6L0.803848 0.75L11.1962 0.749999L6 6Z" fill="#9D9D9D"/>
    </svg>
    `;
    return <SvgXml width={width} height={height} xml={svg} />;
};

export default BelowIcon;