import React from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { SvgXml } from "react-native-svg";

const NotificationIcon = ({ width = widthPercentageToDP(90), height = heightPercentageToDP(40) }) => {
  const svg = `<svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.47993 3.72059C9.47993 2.99904 9.77773 2.30705 10.3078 1.79684C10.8379 1.28663 11.5569 1 12.3066 1C13.0562 1 13.7752 1.28663 14.3053 1.79684C14.8354 2.30705 15.1332 2.99904 15.1332 3.72059C16.7563 4.45926 18.1399 5.60912 19.1358 7.04691C20.1317 8.48471 20.7023 10.1562 20.7865 11.8823V15.9632C20.8929 16.8089 21.204 17.6188 21.695 18.3276C22.186 19.0364 22.843 19.6243 23.6131 20.0441H1C1.77017 19.6243 2.42719 19.0364 2.91814 18.3276C3.4091 17.6188 3.72028 16.8089 3.82664 15.9632V11.8823C3.91082 10.1562 4.48144 8.48471 5.47733 7.04691C6.47323 5.60912 7.85686 4.45926 9.47993 3.72059" stroke="#2C3E50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.06705 20.0441V21.4044C8.06705 22.4867 8.51376 23.5247 9.30891 24.29C10.1041 25.0553 11.1825 25.4853 12.307 25.4853C13.4315 25.4853 14.51 25.0553 15.3052 24.29C16.1003 23.5247 16.547 22.4867 16.547 21.4044V20.0441" stroke="#2C3E50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>  
  `
  return (
    <SvgXml width={width} height={height} xml={svg} />
  )
}
export default NotificationIcon; 