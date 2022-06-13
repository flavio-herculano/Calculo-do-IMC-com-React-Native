import React from "react";
import {TextInput,View, Text} from "react-native"

export default function Form() {
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Ex. 1.60" keyboardType="number-pad"/>
                <Text>Peso</Text>
                <TextInput placeholder="Ex. 60.176" keyboardType="number-pad"/>
            </View>
        </View>
    );
}