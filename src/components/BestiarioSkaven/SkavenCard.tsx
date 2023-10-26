import React from 'react';

import {
    View,
    Image,
    StyleSheet,
    Text,
    FlatList,
    SafeAreaView,
    Dimensions
} from 'react-native'


import { SkavenList } from '../../assets/data/skavenList';
import { BackgroundImage } from '@rneui/base';


export interface CardsProps {
}

export function SkavenCard(props: CardsProps) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    numColumns={0}
                    data={SkavenList}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View style={styles.container}>
                            <Text style={styles.character}>{item.name}</Text>
                            <Image style={styles.characterimage} source={item.image}/>
                            <Text style={styles.characterattribute}>{item.descripiton}</Text>

                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

export default SkavenCard;

// const deviceWidth = Math.round(Dimensions.get('window').width);
// const offset = 40;
// const radius = 20;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        border: "1px solid #ddd",
        borderradius: "5px",
        padding: 20,
        width: 200,
        textAlign: "center",
        margin: 10,

    },
    /* Estilizando a imagem do personagem */
    characterimage: {
        width: 100,
        height: 100,
        borderradius: "50%",
        // object - fit: cover,
        margin: 0,
        border: 2,
    },

    /* Estilizando o nome do personagem */
    character: {
        fontsize: "1.2em",
        fontweight: "bold",
        margin: 10,
        
        color: "limegreen",
    },

    /* Estilizando os atributos do personagem */
    characterattributes: {
        display: "flex",
        justifycontent: "spacebetween",
        textTransform:'capitalize',
    },

    /* Estilizando cada atributo */
    characterattribute: {
        width: "88%", /* para criar uma pequena margem entre os atributos */
        padding: 5,
        border: 1,
        borderradius: 3,
        backgroundcolor: "#fff",
        color: "limegreen",
}
})