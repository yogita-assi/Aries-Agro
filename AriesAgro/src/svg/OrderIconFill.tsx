import React from 'react';
import { SvgXml } from 'react-native-svg';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';


const OrderIconFill = ({ width = widthPercentageToDP(60), height = heightPercentageToDP(60) }) => {
    const svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.2855 9.14301L11.7527 10.8904L1.7303 5.66414L5.21572 3.81429L15.2855 9.14301Z" stroke="#049148"/>
    <path d="M22.8611 18.0079L12.9414 23.0341V12.9865L16.5532 11.2V12.7859C16.5532 13.4502 17.0918 13.9888 17.7561 13.9888C18.4205 13.9888 18.959 13.4502 18.959 12.7859V10.01L23.5001 7.76401V16.9764C23.5001 17.417 23.2573 17.8098 22.8634 18.0067L22.8634 18.0067L22.8611 18.0079Z" stroke="#049148"/>
    <path d="M7.78385 2.45139L11.2173 0.629187C11.5425 0.4602 11.9338 0.456806 12.2618 0.620145L12.2643 0.621384L12.2655 0.62199L22.2673 5.68979L17.9442 7.82802L7.78385 2.45139Z" stroke="#049148"/>
    <path d="M0.5 16.9886V7.73573L10.5355 12.9688V23.0076L1.12015 18.0105L1.12016 18.0104L1.11768 18.0092C0.736036 17.8093 0.5 17.4195 0.5 16.9886Z" stroke="#049148"/>
    </svg>
    
    `;
    return <SvgXml width={width} height={height} xml={svg} />;
};

export default OrderIconFill;