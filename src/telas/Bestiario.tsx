import * as React from 'react';
import SkavenCard from '../components/BestiarioSkaven/SkavenCard';

import { View, Text, ImageBackground, ToastAndroid } from 'react-native';
import { Card } from '@rneui/themed';

import bgInfo from '../assets/imagens/outros/bgInfo.png';

export interface BestiarioProps {
}

export function Bestiario() {
    return (
        <ImageBackground source={bgInfo} style={{width: "100%", height: "100%"}}>
            <SkavenCard></SkavenCard></ImageBackground>

        
    );

    ToastAndroid.show("Estatisticas sujeitas a mudanças com atualizações do jogo", 3000)
}

export default Bestiario;
