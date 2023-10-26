import { ImageProps } from "react-native";

export interface Skaven {
    name: string,
    image: ImageProps["source"];
    descripiton: string,
    vida: number,

}

const soldier = require("../imagens/skavens/skaven-soldier.png");
const eshin = require("../imagens/skavens/eshin.png");
const globadeiro = require("../imagens/skavens/Globadeiro.png");

export const SkavenList:Skaven[]  = [
    {
        name: 'Skaven Soldier',
        image: soldier,
        descripiton: '01',
        vida: 100,
    },
    {
        name: 'Skaven Eshin',
        image: eshin,
        descripiton: '02',
        vida: 120
    },
    {
        name: 'Skaven Globadeiro',
        image: globadeiro,
        descripiton: "Um Globadier do Vento Envenenado é membro de uma classe de especialistas em armas Skaven do Clã Skryre que são treinados no uso da guerra alquímica.",
        vida: 200,
    }   
];