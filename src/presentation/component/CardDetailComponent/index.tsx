import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { priceSepartor } from '../../../data/factory';
import { NumberFoodComponent } from '../NumberFoodComponent';
import { SelectPickerComponent } from '../SelectPickerComponent';
import { ValueFoodComponent } from '../ValueFoodComponent';
import { styles } from './styles';



export const CardDetailComponent = (props: any) => {
    let { action, data } = props;
    const [price, setPrice] = useState(data.price)
    const [numberOfFood, setNumberOfFood] = useState(1)
    const [dataDTO, setDataDTO]=useState(data)
    const [option, setOption] = useState('Tomate')
    const updateNumberOfFood =(value:any) =>{
        setNumberOfFood(value)
    }
    const updateOption =(value:any) =>{
        setOption(value)
    }
    const update = () =>{
        action(dataDTO)
    }
    useEffect(()=>{
        setPrice(data.price*numberOfFood)
    },[numberOfFood])
    useEffect(()=>{
        setDataDTO({...dataDTO, price, numberOfFood, option})
    },[price, numberOfFood, option])

    return (
        <View style={styles.container}>
            <View style={styles.twoColumns}>
                <View>
                    <Text style={styles.title}>{data.title} </Text>
                </View>

                <TouchableOpacity
                    style={styles.commander}
                    onPress={update}
                >
                    <Image
                    style={styles.bag}
                    source={require('../../../assets/images/icon/add.png')}
                    />
                </TouchableOpacity>

            </View>
            <View style={styles.twoColumnsParent}>
                <View style={styles.child_great}>
                    <View style={styles.information}>
                        <View>
                            <Text style={styles.description}>{data.description}</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>{priceSepartor(data.price)}</Text>
                            <Text style={styles.price}> Ar</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.child_little}>
                    <Image
                        style={styles.image}
                        source={data.image}
                    />
                </View>
            </View>
            <View style={styles.commandeContainer}>
                <View style={styles.select}>
                    <SelectPickerComponent selected={option} updateOption={updateOption}/>
                </View>
                <View style={styles.twoColumnsFood}>
                    <View style={styles.numberOfFood}>
                        <NumberFoodComponent numberOfFood={numberOfFood} setNumberOfFood={updateNumberOfFood} />
                    </View>
                    <View style={styles.displayNumber}>
                        <ValueFoodComponent foodValue={price}/>
                    </View>
                </View>
            </View>
        </View>
    )
}