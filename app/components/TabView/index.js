import React, {useState} from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import Tabs from '../Tabs';
import {IS_X, NOTCH_HEIGHT, STATUS_BAR_HEIGHT} from '../../constants';
const TabScore = () => {
    return (
        <ScrollView>
            <View style={{height: 100, backgroundColor: '#ffabab'}}/>
            <View style={{height: 100, backgroundColor: '#ffabfa'}}/>
            <View style={{height: 100, backgroundColor: '#faffab'}}/>
            <View style={{height: 100, backgroundColor: '#abab00'}}/>
            <View style={{height: 100, backgroundColor: '#bbccff'}}/>
            <View style={{height: 100, backgroundColor: '#ab00ff'}}/>
            <View style={{height: 100, backgroundColor: '#ab1fff'}}/>
        </ScrollView>
    );
};
const TabColour = () => {
    return (
        <ScrollView>
            <View style={{height: 200, backgroundColor: '#ffabfa'}}/>
            <View style={{height: 200, backgroundColor: '#ab00ff'}}/>
            <View style={{height: 200, backgroundColor: '#ab1fff'}}/>
        </ScrollView>
    );
};
const TabProduct = () => {
    return (
        <ScrollView>
            <View style={{height: 100, backgroundColor: '#ffabab'}}/>
            <View style={{height: 300, backgroundColor: '#ffabfa'}}/>
            <View style={{height: 100, backgroundColor: '#bbccff'}}/>
            <View style={{height: 150, backgroundColor: '#ab00ff'}}/>
            <View style={{height: 200, backgroundColor: '#abff00'}}/>
            <View style={{height: 200, backgroundColor: '#abff00'}}/>
            <View style={{height: 200, backgroundColor: '#00ff00'}}/>
            <View style={{height: 200, backgroundColor: '#ffff00'}}/>
        </ScrollView>
    );
};
const TabView = () => {
    const {width , height} = Dimensions.get('window');
    const [current, setCurrent] = useState(0);
    const getContent = () => {
        let content = null;
        switch (current) {
            case 0:
                content = <TabScore />;
                break;
            case 1:
                content = <TabColour />;
                break;
            case 2:
                content = <TabProduct />;
        }

        return content;
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
            {getContent()}
        </>
    );
};

export default TabView;