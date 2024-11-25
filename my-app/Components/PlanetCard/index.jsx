import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function PlanetCard({planet}) {
    const navigation = useNavigation();

    const id = planet.id;

    return(
        <View style={styles.card} >
            <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('Details', { id })}>
                <Image source={{uri: planet.image}} style={styles.planetImage}/>
                <Text style={styles.planetName}> {planet.name} </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    planetImage: {
        width: 100,
        height: 100,
        margin: 10,
        marginLeft: 30,
    },
    planetName: {
        marginTop: 10,
        color: 'white'
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        height: '140',
        flexDirection: 'row'
    },
    touchable: {
        margin: 5,
        borderRadius: 20,
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'row',
        width: '95%',
        height: '90%'
    }
})