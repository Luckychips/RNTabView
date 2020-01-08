import React, {useState} from 'react';
import {Dimensions, Animated} from 'react-native';
import styled from 'styled-components';
import {IS_X, NOTCH_HEIGHT, STATUS_BAR_HEIGHT} from '../../constants';
const TabContainer = styled.View`
  flex-direction: row;
  margin-top: ${IS_X ? NOTCH_HEIGHT : STATUS_BAR_HEIGHT}px;
`;
const Tab = styled.TouchableOpacity`
  width: ${props => props.width}px;
  height: 44px;
  border-bottom-width: 1px;
  border-bottom-color: #efefef;
  justify-content: center;
`;
const Title = styled.Text`
  font-size: 16px;
  font-weight: ${props => props.active ? 'bold' : '300'};
  text-align: center;
`;
const Tabs = props => {
    const {width} = Dimensions.get('window');
    const [current, setCurrent] = useState(0);
    const [position] = useState(new Animated.Value(0));
    const getTabWidth = () => {
        return width / props.menus.length;
    };
    const getTabInputRanges = () => {
        const inputRanges = [];
        for (let i = 0; i < props.menus.length; i++) {
            inputRanges.push(i);
        }
        return inputRanges;
    };
    const getTabOutputRanges = () => {
        const outputRanges = [];
        for (let i = 0; i < props.menus.length; i++) {
            outputRanges.push((width / props.menus.length) * i);
        }

        return outputRanges;
    };
    const tabbed = index => {
        if (current === index) return;

        Animated.timing(position, {
            toValue: index,
            duration: 250
        }).start(event => {
            if (event.finished) {
                setCurrent(index);
                props.setCurrent(index);
            }
        });
    };

    const animated = {
        width: getTabWidth(),
        height: 3,
        backgroundColor: '#1f1f1f',
        left: position.interpolate({
            inputRange: getTabInputRanges(),
            outputRange: getTabOutputRanges()
        }),
        bottom: 0
    };
    return (
        <>
            <TabContainer>
                {props.menus.map((menu, index) => {
                    return (
                        <Tab key={index} width={getTabWidth()} onPress={tabbed.bind(this, index)}>
                            <Title active={current === index}>{menu}</Title>
                        </Tab>
                    );
                })}
            </TabContainer>
            <Animated.View style={animated} />
        </>
    );
};

export default Tabs;