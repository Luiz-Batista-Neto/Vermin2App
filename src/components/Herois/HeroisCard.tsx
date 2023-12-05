import React from 'react';

import {
    View,
    Image,
    StyleSheet,
    Text,
    FlatList,
    SafeAreaView,
} from 'react-native'

import { SeparatorItem } from "../BestiarioSkaven/SeparatorItem"
import { BackgroundImage } from '@rneui/base';

//OBJ
import { HeroList } from '../../assets/data/heroes';
//STATUS
import attack from '../../assets/imagens/outros/status/attack.png';
import health from '../../assets/imagens/outros/status/health.png';
import { headerSkavenInfo } from '../BestiarioSkaven/Header';


export interface CardsProps {
}

export function HeroiCard(props: CardsProps) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                ItemSeparatorComponent={SeparatorItem}
                ListHeaderComponent={headerSkavenInfo}
                data={HeroList}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <Image
                            style={{ width: 120, height: 120 }}
                            source={item.image} />

                        <Text
                            style={styles.status}>
                            <Image source={health} style={{ width: 15, height: 15 }} />{item.classe1.Vida}
                            <Image source={attack} style={{ width: 15, height: 15 }} />{item.classe1.Defesa}
                        </Text>

                        <Text
                            style={styles.name}>
                            {item.name}
                        </Text>

                        <Text
                            style={styles.description}>
                            {item.descripiton}
                        </Text>

                    </View>
                )}
            />
        </View>
    </SafeAreaView>
    );
}

export default HeroiCard;


const styles = StyleSheet.create({
container: {
    flexDirection: "column",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 20,
},

content: {
    flex: 1,
    marginLeft: 16,
},

name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "limegreen",
    marginBottom: 16,
},
description: {
    fontSize: 16,
    fontStyle: 'italic',
    color: "limegreen",
},
status: {
    position: "absolute",
    marginTop: 30,
    marginLeft: 155,
    color: "limegreen",
    textAlign: "center",
    fontSize: 45
},
},

)
