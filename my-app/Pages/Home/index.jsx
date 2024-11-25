import React, {useState, useEffect} from "react";
import { PlanetsScroll } from "../../Components/PlanetsScroll";
import { SafeAreaView, View, StyleSheet } from "react-native";
import AddPlanetButton from "../../Components/AddPlanetButton";
import SortPlanetsButton from "../../Components/SortPlanetsButton";
import { getPlanets } from "../../Services/planetsServices";

export default function Home() {

    const [ planets, setPlanets] = useState([]);

    const fetchPlanets = async () => {
        const data = await getPlanets();
        console.log("planets: ", data);
        setPlanets(data);
    }

    useEffect(() => {
        fetchPlanets();
    }, []);

    return (
        <View style={styles.root}>
        <SafeAreaView style={styles.homeContainer}>
            <View style={styles.container}>
                <PlanetsScroll planets={planets}></PlanetsScroll>

                <View style={styles.buttonContainer}>
                    <AddPlanetButton></AddPlanetButton>
                    <SortPlanetsButton
                        planets={planets}
                        setPlanets={setPlanets}
                    />
                </View>
            </View>
            

        </SafeAreaView>
        </View>
    );

}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    homeContainer: {
        flex: 1,
        width: '85%',
        height: '85%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    container: {
        alignItems:'center',
        width: '85%', 
        height: '85%', 
        gap: 20
    },
    buttonContainer: {
        display: 'flex', 
        flexDirection: 'row', 
        gap: 20
    }
})