import React from 'react';
import { SvgXml } from 'react-native-svg';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const AccountVersion = ({ width = widthPercentageToDP(60), height = heightPercentageToDP(60) }) => {
    const svg = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_33_2233)">
    <mask id="mask0_33_2233" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
    <path d="M25 0H0V25H25V0Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_33_2233)">
    <mask id="mask1_33_2233" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
    <path d="M0 1.90735e-06H25V25H0V1.90735e-06Z" fill="white"/>
    </mask>
    <g mask="url(#mask1_33_2233)">
    <path d="M3.19712 12.523C3.19712 15.6365 4.74404 18.3887 7.11108 20.0529C7.52822 20.3462 7.55044 20.9556 7.14971 21.2709L7.13848 21.2798C6.87681 21.4858 6.50996 21.4995 6.23745 21.308C3.47407 19.3674 1.66797 16.1559 1.66797 12.523C1.66797 6.63016 6.42021 1.84638 12.3013 1.79608V3.32572C7.26431 3.37557 3.19712 7.47431 3.19712 12.523Z" stroke="black" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="842.67 40"/>
    <path d="M12.7075 0.428151L15.5178 2.35047C15.6684 2.45349 15.6684 2.67551 15.5178 2.77849L12.7075 4.70086C12.5354 4.81858 12.3018 4.69534 12.3018 4.48684V0.642164C12.3018 0.43362 12.5354 0.310426 12.7075 0.428151Z" stroke="black" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="476 40"/>
    <path d="M21.8024 12.4767C21.8024 9.36323 20.2555 6.61104 17.8884 4.94683C17.4713 4.65352 17.4491 4.04414 17.8498 3.72876L17.861 3.71987C18.1227 3.51392 18.4896 3.50025 18.7621 3.69165C21.5254 5.63233 23.3315 8.8438 23.3315 12.4767C23.3315 18.3695 18.5793 23.1533 12.6982 23.2036V21.674C17.7352 21.6241 21.8024 17.5254 21.8024 12.4767Z" stroke="black" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.2924 24.5715L9.48204 22.6491C9.33151 22.5461 9.33151 22.3241 9.48204 22.2211L12.2924 20.2987C12.4645 20.181 12.6981 20.3043 12.6981 20.5128V24.3574C12.6981 24.566 12.4645 24.6892 12.2924 24.5715Z" stroke="black" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="476 40"/>
    <path d="M10.535 16.438C10.4763 16.438 10.4176 16.4346 10.359 16.4276C9.94812 16.3792 9.57014 16.1616 9.32195 15.8307L7.5323 13.4444C7.1278 12.9051 7.23708 12.14 7.77644 11.7354C8.31584 11.3309 9.08098 11.4403 9.48542 11.9796L10.6938 13.5907L15.7126 9.42876C16.2316 8.99854 17.0011 9.07022 17.4315 9.58921C17.8618 10.1082 17.79 10.8777 17.271 11.3081L11.5065 16.0884C11.2335 16.3148 10.8871 16.438 10.535 16.438Z" stroke="black" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    </g>
    </g>
    <defs>
    <clipPath id="clip0_33_2233">
    <rect width="25" height="25" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `;
    return <SvgXml width={width} height={height} xml={svg} />;
};
export default AccountVersion;