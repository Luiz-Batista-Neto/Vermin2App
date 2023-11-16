import * as React from 'react';

import { View, Text, ImageBackground, ImageProps } from 'react-native';
import { Card } from '@rneui/themed';

import HeroiCard from '../components/Herois/HeroisCard';
import bgInfo from '../assets/imagens/outros/bgInfo.png';

export interface HeroisoProps {
}

export function Herois() {
    return (
        <ImageBackground source={bgInfo} style={{width: "100%", height: "100%"}}>
            <HeroiCard/></ImageBackground>
    );
}

export default Herois;
