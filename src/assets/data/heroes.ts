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
    },
    classe2: {
        ClasseNome: string,
        Classeimage: ImageProps["source"];
        ClasseDescricao: string,
        Vida: number,
        Defesa: number,
    },
    classe3: {
        ClasseNome: string,
        Classeimage: ImageProps["source"];
        ClasseDescricao: string,
        Vida: number,
        Defesa: number,
    },
    classe4: {
        ClasseNome: string,
        Classeimage: ImageProps["source"];
        ClasseDescricao: string,
        Vida: number,
        Defesa: number,
    },

}

//Markus
const Markus = require("../imagens/herois/Markus.png");
const MarkusMercenary = require("../imagens/herois/Markus.png")


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
        classe2: {
            ClasseNome: "Huntsman",
            ClasseDescricao: "A primeira classe desbloqueável de Markus, Huntsman, fica disponível no nível 7. É uma classe de combate à distância que se concentra em tiros precisos e acertos críticos. Com sua habilidade de carreira Hunter's Prowl, ele pode desaparecer de vista por até 6 segundos, durante os quais qualquer tiro disparado com sua arma de longo alcance causa dano bônus e recarregar não custa munição.",
            Vida: 500,
            Defesa: 100,
            Classeimage: 0
        },
        classe3: {
            ClasseNome: "Foot Knight",
            ClasseDescricao: "A segunda classe desbloqueável de Markus, Foot Knight, é desbloqueada quando ele atinge o nível 12. É também a classe usada ao jogar com ele durante o prólogo do jogo. Esta é uma classe de tanque que pode atacar inimigos usando Valiant Charge, repelindo-os e criando espaço para respirar.",
            Vida: 2000,
            Defesa: 1,
            Classeimage: 0
        },
        classe4: {
            ClasseNome: "Cavaleiro do Santo Gráu",
            ClasseDescricao: "A última classe de Markus é o Cavaleiro do Graal, que é desbloqueado ao comprar o DLC de mesmo nome. É uma classe híbrida corpo a corpo / tanque que pode cortar inimigos à sua frente causando danos tremendos usando a habilidade de carreira Blessed Blade, enquanto a habilidade passiva Bastion of Bretonnia permite que ele bloqueie ataques de lançadores Warpfire que facilmente consumiriam outras classes.",
            Vida: 1300,
            Defesa: 700,
            Classeimage: 0
        },
    },

];