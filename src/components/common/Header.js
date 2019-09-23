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
        fontSize: 25,

        color: '#fcf7f7'
    },
    viewStyle: {
        backgroundColor: '#f85c50',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.5,
        // shadowRadius: 3.84,

        // elevation: 5,
        position: 'relative',

        
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    }
}

export  {Header};