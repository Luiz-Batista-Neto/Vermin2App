import { ImageProps } from "react-native";

import attack from '../../assets/imagens/outros/status/attack.png';
import  health  from '../../assets/imagens/outros/status/health.png';

export interface Skaven {
    name: string,
    image: ImageProps["source"];
    descripiton: string,
    vida: number,
    dano: any,

}

const soldier = require("../imagens/skavens/skaven-soldier.png");
const eshin = require("../imagens/skavens/eshin.png");
const globadeiro = require("../imagens/skavens/Globadeiro.png");

export const SkavenList:Skaven[]  = [
    {
        name: 'Skaven Soldier',
        image: soldier,
        descripiton: 'Os Skavenslaves, também conhecidos como Slave Rats ou Clanrat Slaves, ocupam a casta mais baixa dentro da hierarquia brutal da raça Skaven, embora também constituam a esmagadora maioria da abundante população do Sub-Império.',
        vida: 100,
        dano: 5,
    },
    {
        name: 'Skaven Eshin',
        image: eshin,
        descripiton: 'Também conhecidos como "Ratos Assassinos", os Gutter Runners empunham duas garras de combate aprimoradas com Warpstone e extrema agilidade para saltar sobre sua presa e matá-la quando ela for desativada. Como a manobrabilidade e a furtividade são o seu forte, eles não usam armadura, mas sim roupas escuras, incluindo uma capa.',
        vida: 120,
        dano: 20,
    },
    {
        name: 'Skaven Globadeiro',
        image: globadeiro,
        descripiton: "Um Globadier do Vento Envenenado é membro de uma classe de especialistas em armas Skaven do Clã Skryre que são treinados no uso da guerra alquímica.",
        vida: 200,
        dano: 3 + "sec"
    }   
];