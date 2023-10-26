import * as React from 'react';
import SkavenCard from '../components/BestiarioSkaven/SkavenCard';

import { View, Text, ImageBackground } from 'react-native';
import { Card } from '@rneui/themed';

import bgInfo from '../assets/imagens/outros/bgInfo.png';

export interface BestiarioProps {
}

export function Bestiario() {
    return (
        <View style={{width: "100%", height: "100%"}}>
        <ImageBackground source={bgInfo} style={{width: "100%", height: "100%"}}>
            <SkavenCard></SkavenCard>
        </ImageBackground>
        </View>
    );
}

export default Bestiario;
