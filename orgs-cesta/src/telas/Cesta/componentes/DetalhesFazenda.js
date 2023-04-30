import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Texto from "../../../componentes/Texto";
import Botao from "../../../componentes/Botao";

export default function DetalhesFazenda({ tituloCesta, logoFazenda, nomeFazenda, descricaoCesta, precoCesta, botao }) {
    return <>
        <Texto style={estilos.tituloCesta}>{tituloCesta}</Texto>
        <View style={estilos.fazenda}>
            <Image style={estilos.logoFazenda} source={logoFazenda} />
            <Texto style={estilos.NomeFazenda}>{nomeFazenda}</Texto>
        </View>

        <Texto style={estilos.descricaoCesta}>{descricaoCesta}</Texto>
        <Texto style={estilos.precoCesta}>{precoCesta}</Texto>

        <Botao texto={botao} style={estilos.botao} onPress={()=>{}}/>
    </>
}

const estilos = StyleSheet.create({
    tituloCesta: {
        fontSize: 28,
        lineHeight: 40,
        fontWeight: "bold",
        color: "#464646",
    },
    fazenda: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
    },
    NomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
    },
    logoFazenda: {
        width: 32,
        height: 32,
        marginRight: 12,
    },
    descricaoCesta: {
        fontSize: 16,
        lineHeight: 26,
        color: "#A3A3A3",
    },
    precoCesta: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#2A9F85",
        lineHeight: 42,
        marginTop: 8,
    },
    botao:{
        marginTop:15,
    },
});