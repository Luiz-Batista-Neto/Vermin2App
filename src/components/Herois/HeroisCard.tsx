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


export interface CardsProps {
}

export function HeroiCard(props: CardsProps) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    ItemSeparatorComponent={SeparatorItem}
                    data={HeroList}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View>
                            <Image source={item.image} style={{width: 199, height: 100}}/>

                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

export default HeroiCard;
