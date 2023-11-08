import React from 'react';
import { SvgXml } from 'react-native-svg';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const AccountOrder = ({ width = widthPercentageToDP(60), height = heightPercentageToDP(60) }) => {
    const svg = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.3993 20.6161L21.2828 6.54795C21.2132 5.6416 20.4467 4.93159 19.5377 4.93159H17.3325V4.83247C17.3325 2.16782 15.1647 0 12.5 0C9.8354 0 7.66757 2.16782 7.66757 4.83247V4.93159H5.4624C4.55337 4.93159 3.78681 5.64155 3.71748 6.54605L2.60068 20.618C2.51425 21.7447 2.90512 22.8665 3.67299 23.6955C4.44087 24.5245 5.52939 25 6.65942 25H18.3406C19.4706 25 20.5592 24.5245 21.3271 23.6955C22.095 22.8664 22.4858 21.7447 22.3993 20.6161ZM9.13193 4.83247C9.13193 2.97529 10.6429 1.46436 12.5 1.46436C14.3572 1.46436 15.8682 2.97534 15.8682 4.83247V4.93159H9.13193V4.83247ZM20.2527 22.7004C19.7538 23.239 19.0748 23.5356 18.3406 23.5356H6.65947C5.92529 23.5356 5.24629 23.239 4.74736 22.7004C4.24848 22.1618 4.00463 21.462 4.06069 20.7319L5.17739 6.65991C5.18872 6.51187 5.31391 6.39595 5.4624 6.39595H7.66757V8.19941C7.66757 8.60376 7.99541 8.93159 8.39975 8.93159C8.8041 8.93159 9.13193 8.60376 9.13193 8.19941V6.39595H15.8682V8.19941C15.8682 8.60376 16.196 8.93159 16.6003 8.93159C17.0047 8.93159 17.3325 8.60376 17.3325 8.19941V6.39595H19.5377C19.6862 6.39595 19.8114 6.51191 19.8229 6.66187L20.9394 20.73C20.9955 21.462 20.7516 22.1618 20.2527 22.7004Z" fill="black"/>
    <path d="M15.799 12.4164C15.5132 12.1304 15.0496 12.1304 14.7637 12.4164L11.4943 15.6857L10.2372 14.4286C9.95132 14.1426 9.4877 14.1426 9.20176 14.4286C8.91582 14.7145 8.91582 15.1781 9.20176 15.464L10.9766 17.2389C11.1196 17.3818 11.307 17.4534 11.4943 17.4534C11.6816 17.4534 11.869 17.3819 12.012 17.2389L15.799 13.4519C16.085 13.1659 16.085 12.7023 15.799 12.4164Z" fill="black"/>
    </svg>`;
    return <SvgXml width={width} height={height} xml={svg} />;
};
export default AccountOrder;