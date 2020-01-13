import {Dimensions} from 'react-native';

export const RGB_TO_HEX = (r, g, b) => {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length === 1) r = '0' + r;
    if (g.length === 1) g = '0' + g;
    if (b.length === 1) b = '0' + b;

    return '#' + r + g + b;
};

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