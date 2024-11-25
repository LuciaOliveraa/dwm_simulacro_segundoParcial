import React, { useEffect, useState } from "react";
import { getPlanets } from "../../Services/planetsServices";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { PlanetCard } from "../PlanetCard";


export function PlanetsScroll({ planets }) {

    
    
    return (
        <View style={styles.root}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}> UCU's Planetarium </Text>
                <FlatList
                    data={planets}
                    renderItem={({ item }) => <PlanetCard planet={item} />}
                />
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    contentContainer: {
        // width: '85%',
        // height: '85%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    root: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        marginBottom: 20,
    }
})