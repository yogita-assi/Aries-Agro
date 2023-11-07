import { Image } from '@rneui/base';
import React from 'react';
const ProfileImageAvatar = ({ photo, style }: any) => {
    const getS3UrlRef = (imageName: any) => {
        if (!imageName) {
            return null;
        } else {
            return { uri: imageName };
        }
    }
    const img = getS3UrlRef(photo);
    return <Image
        source={img ? img : require("../assets/defaultProfileImage.jpg")}
        alt='image'
        resizeMode='cover'
        style={style}>

    </Image>
}
export default ProfileImageAvatar;