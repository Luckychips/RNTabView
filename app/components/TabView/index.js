import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';
import Tabs from '../Tabs';
import {IS_X, NOTCH_HEIGHT, STATUS_BAR_HEIGHT} from '../../constants';
const TabView = () => {
    const {width , height} = Dimensions.get('window');
    const [current, setCurrent] = useState(0);
    const getContent = () => {
        let colour = '#ffabab';
        switch (current) {
            case 0:
                colour = '#ababff';
                break;
            case 1:
                colour = '#abffab';
                break;
            case 2:
                colour = '#ffabab';
        }

        return colour;
    };
    const tabStyle = {
        width: width,
        height: height - (IS_X ? NOTCH_HEIGHT : STATUS_BAR_HEIGHT),
        backgroundColor: getContent()
    };
    return (
        <>
            <Tabs
                menus={['SCORE', 'COLOR', 'PRODUCT']}
                setCurrent={index => setCurrent(index)}
            />
            <View
                style={[tabStyle]}
            />
        </>
    );
};

export default TabView;