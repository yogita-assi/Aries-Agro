import React from 'react';
import { SvgXml } from 'react-native-svg';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';


const InquiryIcon = ({ width = widthPercentageToDP(60), height = heightPercentageToDP(40) }) => {
    const svg = `<svg width="15" height="10" viewBox="1 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.25004 12.5835H12.5834V10.5002H4.25004V12.5835ZM4.25004 9.4585H16.75V7.37517H4.25004V9.4585ZM4.25004 6.3335H16.75V4.25016H4.25004V6.3335ZM0.083374 20.9168V2.16683C0.083374 1.59391 0.287541 1.10329 0.695874 0.694956C1.10421 0.286623 1.59449 0.0828034 2.16671 0.0834979H18.8334C19.4063 0.0834979 19.8969 0.287665 20.3053 0.695998C20.7136 1.10433 20.9174 1.59461 20.9167 2.16683V14.6668C20.9167 15.2397 20.7125 15.7304 20.3042 16.1387C19.8959 16.547 19.4056 16.7509 18.8334 16.7502H4.25004L0.083374 20.9168ZM3.36462 14.6668H18.8334V2.16683H2.16671V15.8387L3.36462 14.6668Z" fill="#5C5C5C"/>
    </svg>   
    
    `;
    return <SvgXml width={width} height={height} xml={svg} />;
};

export default InquiryIcon;