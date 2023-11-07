import React from 'react';
import { SvgXml } from 'react-native-svg';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';


const FarmerDashboardIcon = ({ width = widthPercentageToDP(90), height = heightPercentageToDP(30)}) => {
    const svg = `<svg width="311" height="156" viewBox="0 0 311 156" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="311" height="156" rx="8" fill="url(#paint0_linear_928_126)"/>
    <defs>
    <linearGradient id="paint0_linear_928_126" x1="141" y1="1.18942e-07" x2="160.832" y2="153.437" gradientUnits="userSpaceOnUse">
    <stop stop-color="#60DEB1"/>
    <stop offset="1" stop-color="#34A853"/>
    </linearGradient>
    </defs>
    </svg>
    `;
    return <SvgXml width={width} height={height} xml={svg} />;
};

export default FarmerDashboardIcon;