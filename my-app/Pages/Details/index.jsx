import { View, StyleSheet, Text, SafeAreaView, ImageBackground, TouchableOpacity} from "react-native"
import { useEffect, useState } from "react";
import { deletePlanet, getPlanet } from "../../Services/planetsServices";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Details({ route }) {
    const {id} = route.params; 
    const [planet, setPlanet] = useState([]); 
    const navigation = useNavigation();

    async function fetchPlanet(){
        try {
            const data = await getPlanet(id); 
            setPlanet(data);  
        } catch (error) {
            console.error('Error obteniendo planeta por id', error)
        }
    }

    useEffect(() => {
        fetchPlanet(); 
    }, []);

    async function fetchDeletePlanet() {
        try {
            await deletePlanet(id);
            navigation.navigate('Home'); 
        } catch (error) {
            console.error('Error eliminando planeta', error)
        }
    }

    return (
        <View
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.detailsContainer}>
                    <View style={styles.titleAndBack}>
                        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
                            <Icon name='arrow-back' size={20} style={styles.back}/>
                        </TouchableOpacity>
                        <Text style={styles.title}>{planet?.name}</Text>
                    </View>
                   
                    <View style={styles.infoContainer}>
                        <Text style={styles.text}><Text style={[styles.boldText, styles.text]}>Description:</Text> {planet?.description}</Text>
                        <Text style={styles.text}><Text style={[styles.boldText, styles.text]}>Moons count:</Text> {planet?.moons}</Text>
                        <Text style={styles.text}><Text style={[styles.boldText, styles.text]}>Moons names: </Text> 
                            {planet?.moon_names?.length > 0 
                            ?  planet.moon_names.join(', ') 
                            :  'No tiene'} 
                        </Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={fetchDeletePlanet}>
                            <Text style={styles.buttonText}>Delete planet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Edit', { planet })} > 
                            <Text style={styles.buttonText}>Edit planet</Text>
                        </TouchableOpacity>
                    </View>
                </View>   
            </SafeAreaView>
        </View>
    );

}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        height: '100%',
    },
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    detailsContainer: {
        display: 'flex', 
        alignItems:'center',
        justifyContent: 'space-around', 
        width: '85%', 
        height: '85%', 
        gap: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 50,
        padding: 30
    },
    title: {
      fontWeight: 800,
      fontSize: 70,
    }, 
    boldText: {
        fontWeight: 'bold'
    }, 
    text: {
        fontSize: 20, 
    }, 
    infoContainer: {
        gap: 10
    }, 
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row', 
        gap: 10
    }, 
    button: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15, 
        borderRadius: 50
    }, 
    buttonText: {
        alignSelf: 'center', 
        fontSize: 18
    }, 
    backButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: 5,
        borderRadius: 50, 
        width: '100%',
    }, 
    back: {
        alignSelf: 'center'
    },
    titleAndBack: {
        width: '100%', 
        alignItems: 'center'
    }
});