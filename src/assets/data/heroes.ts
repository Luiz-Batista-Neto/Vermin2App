import { ImageProps } from "react-native";

export interface Heroes {
    name: string,
    image: ImageProps["source"];
    descripiton: string,
    classe1: {
        ClasseNome: string,
        Classeimage: ImageProps["source"];
        ClasseDescricao: string,
        Vida: number,
        Defesa: number,
    }

}

//Markus
const Markus = require("../imagens/herois/Markus.png");
const MarkusMercenary = require("../imagens/herois/Markus.png");
const Bardin = require("../imagens/herois/Bardin.png");
const Victor = require("../imagens/herois/Victor.png");
const Kerilian = require("../imagens/herois/Kerilian.png");


export const HeroList:Heroes[]  = [
    {
        
        name: 'Marcus Kruber',
        image: Markus,
        descripiton: "Ex-soldado do Império, Markus Kruber retorna neste jogo com quatro classes para escolher, consistindo em Mercenário, Caçador, Cavaleiro de Pé e Cavaleiro do Graal.",
        classe1: {
            ClasseNome: "Mercenário",
            ClasseDescricao: "A classe padrão de Markus, Mercenário, está disponível desde o início do jogo. É uma classe focada em combate corpo a corpo que pode atordoar os inimigos com sua habilidade de aumento de moral, ao mesmo tempo que dá a seus aliados 25 pontos de vida temporários. Ele também ganha 10% de aumento na velocidade de ataque por 6 segundos após atingir três inimigos com um único golpe devido à habilidade passiva Paced Strikes.",
            Vida: 800,
            Defesa: 200,
            Classeimage: MarkusMercenary,
        },

    },

    {
        name: 'Bardin Goreksson',
        image: Bardin,
        descripiton: "Ele pode ser o mais baixo do grupo de heróis, mas o Ranger Anão Bardin Goreksson certamente compensa isso com ferocidade, determinação e espírito. Gregário, orgulhoso e sem medo de ofender, Bardin é frequentemente visto avançando no meio da batalha, com machado ou martelo em pleno andamento e deixando um rastro de cadáveres de Skaven atrás de si.",
        classe1: {
            ClasseNome: "Ranger Veterano",
            ClasseDescricao: "classe padrão de Markus, Mercenário, está disponível desde o início do jogo. É uma classe focada em combate corpo a corpo que pode atordoar os inimigos com sua habilidade de aumento de moral, ao mesmo tempo que dá a seus aliados 25 pontos de vida temporários. Ele também ganha 10% de aumento na velocidade de ataque por 6 segundos após atingir três inimigos com um único golpe devido à habilidade passiva Paced Strikes.",
            Vida: 1200,
            Defesa: 400,
            Classeimage: Bardin,
        },
    },

    {
        name: 'Victor Saltzpire',
        image: Victor,
        descripiton: "Os Caçadores de Bruxas são rudes na melhor das hipóteses, e Victor é tão dedicado à luta contra o Caos e o Mal por motivos pessoais que até mesmo seus colegas tendem a sentir que ele é desagradável e até perigoso. Ao contrário de outros Caçadores de Bruxas, Victor não tem objeções em trabalhar com outras raças. Para ele, o fim justifica os meios.",
        classe1: {
            ClasseNome: "Ranger Veterano",
            ClasseDescricao: "classe padrão de Bardin, Veterano, está disponível desde o início do jogo. É uma classe focada em combate corpo a corpo que pode atordoar os inimigos com sua habilidade de aumento de moral, ao mesmo tempo que dá a seus aliados 25 pontos de vida temporários. Ele também ganha 10% de aumento na velocidade de ataque por 6 segundos após atingir três inimigos com um único golpe devido à habilidade passiva Paced Strikes.",
            Vida: 500,
            Defesa: 100,
            Classeimage: Victor,
        },
    },

    {
        name: 'Kerilian',
        image: Kerilian,
        descripiton: "Waywatchers guardam os caminhos ocultos de Athel Loren, mantendo vigília contra intrusos de todos os tipos. Essas ameaças podem terminar com arco ou lâmina, e o fazem com prazer, pois transgressão é um crime que tem um alto preço no domínio dos elfos da floresta. Assim, os exércitos e os grupos de ataque são embotados – ou mesmo massacrados em massa – muito antes de chegarem ao coração de Athel Loren.",
        classe1: {
            ClasseNome: "Waywatchers",
            ClasseDescricao: "classe padrão de Kerilian, Waywatchers, está disponível desde o início do jogo. É uma classe focada em combate corpo a corpo que pode atordoar os inimigos com sua habilidade de aumento de moral, ao mesmo tempo que dá a seus aliados 25 pontos de vida temporários. Ele também ganha 10% de aumento na velocidade de ataque por 6 segundos após atingir três inimigos com um único golpe devido à habilidade passiva Paced Strikes.",
            Vida: 500,
            Defesa: 100,
            Classeimage: Bardin,
        },
    },

];