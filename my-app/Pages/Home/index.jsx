import React from "react";
import { PlanetsScroll } from "../../Components/PlanetsScroll";
import { SafeAreaView, View, StyleSheet } from "react-native";

export default function Home() {

    return (
        <SafeAreaView style={styles.homeContainer}>
            <PlanetsScroll></PlanetsScroll>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center'
        
    },
})