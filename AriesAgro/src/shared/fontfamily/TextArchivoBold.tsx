import React from 'react';
import { Text } from 'react-native';
import { commonStyle } from '../styles/screenStyles/common-style';

const TextArchivoBold = ({ children, style, ...otherProps }:any) => {
    return <>
        <Text allowFontScaling={false} {...otherProps} style={{...commonStyle.textArchioBold, ...style}}>
            {children}
        </Text>
    </>

}
export default TextArchivoBold;