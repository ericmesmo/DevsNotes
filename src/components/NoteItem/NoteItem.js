import React from "react";
import { Text, TouchableHighlight } from "react-native";
import styles, {} from './Styles'

export default ({ data, index, onPress }) => {
    
    return (
        <TouchableHighlight style={styles.box} onPress={() => onPress(index)}>
            <Text style={styles.titulo}>{data.title}</Text>
        </TouchableHighlight>
    );
}