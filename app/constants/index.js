import {Dimensions} from 'react-native';

const IS_X_SIZE = dim => {
    return dim.height === 812 || dim.width === 812;
};

const IS_XR_SIZE = dim => {
    return dim.height === 896 || dim.width === 896;
};

export const IS_X = () => {
    const dim = Dimensions.get('window');
    return Platform.OS === 'ios' && (IS_X_SIZE(dim) || IS_XR_SIZE(dim));
};

export const NOTCH_HEIGHT = 44;
export const STATUS_BAR_HEIGHT = 20;