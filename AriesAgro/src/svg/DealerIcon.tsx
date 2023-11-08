import React from 'react';
import { SvgXml } from 'react-native-svg';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';


const DealerIcon = ({ width = widthPercentageToDP(60), height = heightPercentageToDP(50) }) => {
    const svg = `<svg width="75" height="70" viewBox="20 5 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">

    <g clip-path="url(#clip0_23_678)">
    <path d="M29.3334 20.3457H26.356V29.7325H29.3334V20.3457Z" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M49.6439 20.3457H46.6665V29.7325H49.6439V20.3457Z" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M37.0645 31.5731L37.8879 32.3905C38.2316 32.7341 38.7888 32.7341 39.1324 32.3905C39.4761 32.0468 39.4761 31.4896 39.1324 31.146L39.6492 31.6565C39.9928 32.0002 40.55 32.0002 40.8937 31.6565C41.2297 31.3206 41.2363 30.7813 40.9156 30.4362L41.2251 30.7457C41.5688 31.0893 42.1259 31.0893 42.4696 30.7457C42.808 30.4073 42.8125 29.8625 42.4846 29.5177L42.9602 29.9933C43.281 30.2511 43.8382 30.2511 44.1819 29.9075C44.5255 29.5638 44.5255 29.0066 44.1819 28.663L42.9381 27.4214" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M29.3333 28.3247H30.8668" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M30.9657 21.2847H29.3333" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M37.7303 19.6606L35.7766 19.6852C35.4072 19.6899 35.0544 19.8395 34.7943 20.1019L33.622 21.2844H31.7271" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M38.3643 30.3901L39.1327 31.146" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M39.6099 29.145L40.9158 30.436" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M40.9158 27.9668L42.4848 29.5175" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M34.8984 26.0827L33.0976 27.8835C32.7539 28.2272 32.7539 28.7844 33.0976 29.128C33.4412 29.4717 33.9984 29.4717 34.3193 29.2138L36.1745 27.3586C36.5269 27.0063 36.5269 26.435 36.1745 26.0826C35.8221 25.7303 35.2508 25.7303 34.8984 26.0827Z" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M32.5287 25.901L31.0597 27.37C30.7161 27.7136 30.7161 28.2708 31.0597 28.6145C31.4034 28.9581 31.9606 28.9581 32.2814 28.7003L33.8048 27.177C34.1571 26.8246 34.1571 26.2533 33.8048 25.9009C33.4524 25.5486 32.8811 25.5486 32.5287 25.901Z" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M36.1746 27.359L34.3737 29.1598C34.0301 29.5035 34.0301 30.0607 34.3737 30.4043C34.7174 30.748 35.2746 30.748 35.5954 30.4902L37.4506 28.635C37.803 28.2826 37.803 27.7113 37.4506 27.3589C37.0982 27.0066 36.5269 27.0066 36.1746 27.359Z" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M37.1186 28.9664L35.6496 30.4354C35.3059 30.7791 35.3059 31.3363 35.6496 31.6799C35.9932 32.0236 36.5504 32.0236 36.8713 31.7658L38.3946 30.2424C38.747 29.8901 38.747 29.3188 38.3946 28.9664C38.0422 28.6141 37.4709 28.6141 37.1186 28.9664Z" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M42.281 26.7661L43.9266 28.4094L46.6667 28.3244" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M46.6667 21.2873H42.972L41.2036 19.9466C40.9588 19.761 40.6601 19.6606 40.3529 19.6606H37.7302L34.3025 23.0239L34.9473 23.7302C35.4837 24.3178 36.4001 24.3445 36.9698 23.7892L38.1424 22.6335L41.7681 26.254" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M38.1423 22.6338L39.951 24.4399C40.4941 24.9822 41.3714 24.9896 41.9237 24.4567L42.2342 24.157" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M47.8665 26.6348H48.5705" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M27.4502 26.6348H28.1542" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M38.0028 9.35205H33.1862L32.7169 13.2505H31.0801V16.7676H32.5461" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M42.4586 16.7676H44.9197V13.2505H42.573L40.9303 9.35205H38.657" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M35.2544 16.7676H39.7366" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M33.906 18.0453C34.6549 18.0453 35.2621 17.4381 35.2621 16.6892C35.2621 15.9402 34.6549 15.333 33.906 15.333C33.157 15.333 32.5498 15.9402 32.5498 16.6892C32.5498 17.4381 33.157 18.0453 33.906 18.0453Z" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M41.0747 18.0453C41.8236 18.0453 42.4308 17.4381 42.4308 16.6892C42.4308 15.9402 41.8236 15.333 41.0747 15.333C40.3257 15.333 39.7185 15.9402 39.7185 16.6892C39.7185 17.4381 40.3257 18.0453 41.0747 18.0453Z" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M40.7452 13.2505L39.7101 10.9009H34.5597L34.2769 13.2505H40.7452Z" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M37.1396 10.9009V13.2505" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M37.9529 14.7495H38.6569" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M43.6321 14.7495H44.9198" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    <path d="M31.0801 14.7495H32.3737" stroke="#5C5C5C" stroke-width="0.7" stroke-miterlimit="10"/>
    </g>
    <defs>
    <clipPath id="clip0_23_678">
    <rect width="24" height="24" fill="white" transform="translate(26 9)"/>
    </clipPath>
    </defs>
    </svg>
    
    
    `;
    return <SvgXml width={width} height={height} xml={svg} />;
};

export default DealerIcon;