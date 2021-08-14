import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Button, KeyboardAvoidingView} from 'react-native';

const HomeScreen = (props) => {
    const { navigation } = props;
    const [text, setText] = useState('');
    const [list, setList] = useState([]);

    function onChangeText(val) {
        setText(val);
    }

    function add(value) {
        setList((prevlist) => {
            return [...prevlist, value];
        });
        setText('');
    }
    console.log(list)
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
           
            <Text onPress={() => navigation.navigate('Details')}>Go to Details</Text>
           
            
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: '80%'
    },
});


export default HomeScreen;