import React from 'react';
import { SvgXml } from 'react-native-svg';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const AccountProfile = ({ width = widthPercentageToDP(60), height = heightPercentageToDP(60) }) => {
    const svg = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_30_1970)">
    <path d="M21.3388 3.66116C18.9779 1.30024 15.8388 0 12.5 0C9.16119 0 6.02207 1.30024 3.66116 3.66116C1.30024 6.02207 0 9.16119 0 12.5C0 15.8388 1.30024 18.9779 3.66116 21.3388C6.02207 23.6998 9.16119 25 12.5 25C15.8388 25 18.9779 23.6998 21.3388 21.3388C23.6998 18.9779 25 15.8388 25 12.5C25 9.16119 23.6998 6.02207 21.3388 3.66116ZM5.42507 20.9618C5.83782 17.4103 8.8913 14.6683 12.5 14.6683C14.4024 14.6683 16.1913 15.4095 17.5369 16.7549C18.6737 17.8919 19.3907 19.3764 19.5751 20.9616C17.6582 22.567 15.1901 23.5352 12.5 23.5352C9.80988 23.5352 7.34196 22.5672 5.42507 20.9618ZM12.5 13.1596C10.4067 13.1596 8.70342 11.4563 8.70342 9.36298C8.70342 7.26948 10.4067 5.56641 12.5 5.56641C14.5933 5.56641 16.2966 7.26948 16.2966 9.36298C16.2966 11.4563 14.5933 13.1596 12.5 13.1596ZM20.8359 19.7233C20.4626 18.2184 19.6842 16.8308 18.5726 15.7192C17.6723 14.819 16.6073 14.1436 15.4457 13.7203C16.8421 12.7733 17.7614 11.1734 17.7614 9.36298C17.7614 6.46191 15.4011 4.10156 12.5 4.10156C9.59892 4.10156 7.23858 6.46191 7.23858 9.36298C7.23858 11.1744 8.15868 12.7748 9.5562 13.7217C8.48751 14.1111 7.49855 14.7133 6.64768 15.506C5.41553 16.6534 4.5599 18.1166 4.16317 19.7222C2.48299 17.7853 1.46484 15.2594 1.46484 12.5C1.46484 6.41518 6.41518 1.46484 12.5 1.46484C18.5848 1.46484 23.5352 6.41518 23.5352 12.5C23.5352 15.2599 22.5166 17.7864 20.8359 19.7233Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0_30_1970">
    <rect width="25" height="25" fill="white"/>
    </clipPath>
    </defs>
    </svg>`;
    return <SvgXml width={width} height={height} xml={svg} />;
};
export default AccountProfile;