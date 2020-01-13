import React, {useState} from 'react';
import {ScrollView, RefreshControl, View} from 'react-native';
import Tabs from '../Tabs';
import {RGB_TO_HEX} from "../../constants";
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
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    };
    return (
        <ScrollView refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor={'#ababff'}
                colors={['#ffabab']}
            />
        }>
            <View style={{
                height: 200,
                backgroundColor: RGB_TO_HEX(
                    Math.floor(Math.random() * 256),
                    Math.floor(Math.random() * 256),
                    Math.floor(Math.random() * 256),
                )
            }}/>
            <View style={{
                height: 200,
                backgroundColor: RGB_TO_HEX(
                    Math.floor(Math.random() * 256),
                    Math.floor(Math.random() * 256),
                    Math.floor(Math.random() * 256),
                )
            }}/>
            <View style={{
                height: 200,
                backgroundColor: RGB_TO_HEX(
                    Math.floor(Math.random() * 256),
                    Math.floor(Math.random() * 256),
                    Math.floor(Math.random() * 256),
                )
            }}/>
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