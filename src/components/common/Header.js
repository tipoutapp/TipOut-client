import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    
    );
}

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,

        elevation: 5,
        position: 'relative'
    }
}

export  {Header};