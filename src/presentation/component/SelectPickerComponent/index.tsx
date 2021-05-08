import React, { useState, useEffect } from 'react'
import { View, Text, } from 'react-native'
import { styles } from './styles'
import { Picker } from '@react-native-community/picker';
export const SelectPickerComponent = (props: any) => {
    const {updateOption, selected} = props;
    const [selectedValue, setSelectedValue] = useState(selected);
   
    useEffect(()=>{
        updateOption(selectedValue)
    },[selectedValue])
    return (
        <View >
            <Text>Choisissez une option :</Text>
            <View style={styles.container}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 40, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Tomate" value="Tomate" />
                    <Picker.Item label="Fromage" value="Fromage" />
                </Picker>
            </View>
        </View>
    )
}