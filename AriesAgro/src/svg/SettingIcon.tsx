import React from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { SvgXml } from "react-native-svg";

const SettingIcon = ({ width = widthPercentageToDP(90), height = heightPercentageToDP(40) }) => {
  const svg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_149_306)">
  <path d="M11.078 1.82514e-06C11.372 1.82514e-06 11.635 0.183002 11.734 0.457002L12.44 2.414C12.693 2.477 12.91 2.54 13.094 2.606C13.295 2.678 13.554 2.787 13.874 2.936L15.518 2.066C15.6522 1.99491 15.8058 1.96925 15.9558 1.99287C16.1058 2.01649 16.2442 2.08811 16.35 2.197L17.796 3.692C17.988 3.891 18.042 4.182 17.934 4.436L17.163 6.243C17.291 6.478 17.393 6.679 17.471 6.847C17.555 7.03 17.659 7.282 17.783 7.607L19.58 8.377C19.85 8.492 20.017 8.762 19.999 9.051L19.867 11.126C19.858 11.2608 19.8096 11.39 19.7278 11.4975C19.646 11.6051 19.5345 11.6863 19.407 11.731L17.705 12.336C17.656 12.571 17.605 12.772 17.551 12.942C17.4639 13.2045 17.3645 13.4628 17.253 13.716L18.108 15.606C18.1683 15.7388 18.1846 15.8874 18.1544 16.0301C18.1241 16.1728 18.049 16.3021 17.94 16.399L16.314 17.851C16.2069 17.9462 16.0733 18.0064 15.931 18.0236C15.7888 18.0408 15.6447 18.014 15.518 17.947L13.842 17.059C13.5798 17.1978 13.3093 17.3204 13.032 17.426L12.3 17.7L11.65 19.5C11.6018 19.6318 11.5149 19.746 11.4007 19.8276C11.2865 19.9091 11.1503 19.9542 11.01 19.957L9.11 20C8.96596 20.0038 8.8243 19.9628 8.70449 19.8828C8.58468 19.8027 8.49263 19.6875 8.441 19.553L7.675 17.526C7.41365 17.4367 7.15488 17.34 6.899 17.236C6.68972 17.1454 6.4836 17.0477 6.281 16.943L4.381 17.755C4.25581 17.8084 4.11779 17.8243 3.98374 17.8007C3.8497 17.7771 3.72541 17.715 3.626 17.622L2.22 16.303C2.11532 16.2052 2.04403 16.077 2.01622 15.9365C1.9884 15.796 2.00547 15.6503 2.065 15.52L2.882 13.74C2.77334 13.5292 2.67261 13.3144 2.58 13.096C2.4719 12.8287 2.37186 12.5583 2.28 12.285L0.490001 11.74C0.344502 11.696 0.217596 11.6052 0.128991 11.4817C0.0403864 11.3582 -0.00495751 11.2089 1.25819e-06 11.057L0.0700013 9.136C0.0749839 9.01066 0.114138 8.88907 0.183229 8.78438C0.252321 8.67968 0.34872 8.59587 0.462001 8.542L2.34 7.64C2.427 7.321 2.503 7.073 2.57 6.892C2.66434 6.65025 2.76911 6.41269 2.884 6.18L2.07 4.46C2.00823 4.32938 1.98947 4.18254 2.01642 4.04059C2.04337 3.89864 2.11465 3.76889 2.22 3.67L3.624 2.344C3.72242 2.25117 3.84557 2.18876 3.97863 2.16428C4.11169 2.1398 4.24898 2.15429 4.374 2.206L6.272 2.99C6.482 2.85 6.672 2.737 6.844 2.646C7.049 2.537 7.323 2.423 7.668 2.3L8.328 0.459002C8.37679 0.32427 8.46599 0.207883 8.58339 0.125733C8.7008 0.0435827 8.84071 -0.000326251 8.984 1.82514e-06H11.078ZM10.588 1.377H9.475L8.87 3.071C8.83443 3.16978 8.77688 3.25918 8.70169 3.33246C8.62651 3.40574 8.53566 3.46097 8.436 3.494C8 3.639 7.685 3.764 7.501 3.861C7.306 3.964 7.057 4.121 6.761 4.331C6.66412 4.39899 6.55164 4.44142 6.434 4.45436C6.31635 4.46729 6.19734 4.45032 6.088 4.405L4.258 3.65L3.545 4.324L4.288 5.894C4.33248 5.98741 4.35506 6.08974 4.35402 6.1932C4.35298 6.29665 4.32835 6.39851 4.282 6.491C4.082 6.892 3.947 7.188 3.879 7.37C3.77472 7.67297 3.68463 7.98064 3.609 8.292C3.58388 8.38945 3.53774 8.48023 3.47382 8.55797C3.40991 8.6357 3.32976 8.69851 3.239 8.742L1.449 9.601L1.413 10.581L3.033 11.073C3.248 11.138 3.418 11.303 3.489 11.515C3.649 11.995 3.777 12.349 3.869 12.571C3.9909 12.8527 4.12571 13.1287 4.273 13.398C4.32283 13.4907 4.35048 13.5936 4.35378 13.6988C4.35708 13.8039 4.33593 13.9084 4.292 14.004L3.541 15.642L4.252 16.31L6.034 15.548C6.12999 15.507 6.23391 15.4879 6.33821 15.492C6.44251 15.4962 6.54458 15.5235 6.637 15.572C7.002 15.764 7.274 15.897 7.446 15.97C7.621 16.043 7.956 16.165 8.442 16.331C8.53848 16.3639 8.62651 16.4178 8.6998 16.4886C8.77309 16.5595 8.82984 16.6457 8.866 16.741L9.574 18.612L10.5 18.592L11.097 16.938C11.1311 16.8436 11.1854 16.7578 11.256 16.6865C11.3267 16.6152 11.412 16.5601 11.506 16.525L12.543 16.137C12.805 16.04 13.123 15.887 13.494 15.677C13.5967 15.6193 13.7122 15.5884 13.83 15.587C13.9477 15.5856 14.064 15.6138 14.168 15.669L15.745 16.504L16.632 15.713L15.856 14C15.8161 13.9121 15.7954 13.8167 15.7953 13.7201C15.7951 13.6236 15.8155 13.5281 15.855 13.44C16.037 13.033 16.16 12.726 16.222 12.53C16.283 12.338 16.346 12.061 16.407 11.705C16.428 11.5841 16.4808 11.4709 16.5601 11.3772C16.6394 11.2836 16.7422 11.2127 16.858 11.172L18.506 10.587L18.578 9.447L16.958 8.753C16.8718 8.71629 16.7939 8.66243 16.7291 8.5947C16.6642 8.52697 16.6139 8.44679 16.581 8.359C16.4655 8.04024 16.3394 7.7254 16.203 7.415C16.0739 7.14473 15.9337 6.87985 15.783 6.621C15.7308 6.52955 15.7004 6.42725 15.6944 6.32211C15.6883 6.21697 15.7067 6.11186 15.748 6.015L16.473 4.315L15.709 3.525L14.221 4.313C14.1239 4.36452 14.016 4.39254 13.906 4.3948C13.7961 4.39705 13.6872 4.37349 13.588 4.326C13.2722 4.16897 12.9491 4.02681 12.62 3.9C12.3393 3.80575 12.0531 3.72894 11.763 3.67C11.6479 3.64559 11.5409 3.59231 11.452 3.51517C11.3631 3.43802 11.2953 3.33955 11.255 3.229L10.587 1.376L10.588 1.377ZM10.024 5.641C12.459 5.641 14.434 7.594 14.434 10.002C14.434 12.41 12.459 14.362 10.024 14.362C7.588 14.362 5.614 12.41 5.614 10.002C5.614 7.594 7.588 5.642 10.024 5.642V5.641ZM10.024 7.019C8.357 7.019 7.006 8.354 7.006 10.002C7.006 11.65 8.357 12.986 10.024 12.986C11.69 12.986 13.041 11.65 13.041 10.002C13.041 8.354 11.691 7.019 10.024 7.019Z" fill="#717171"/>
  </g>
  <defs>
  <clipPath id="clip0_149_306">
  <rect width="20" height="20" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  `
  return (
    <SvgXml width={width} height={height} xml={svg} />
  )
}
export default SettingIcon; 