import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import Texto from "../componentes/Texto";

import topo from '../../assets/topo.png';
import icoFazenda from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhe da Cesta</Texto>

        <View style={estilos.cesta}>
            <Texto style={estilos.tituloCesta}>Cesta de Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image style={estilos.logoFazenda} source={icoFazenda} />
                <Texto style={estilos.NomeFazenda}>Jenny Jack Farm</Texto>
            </View>

            <Texto style={estilos.descricaoCesta}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.</Texto>
            <Texto style={estilos.precoCesta}>R$ 40,00</Texto>
        </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    tituloCesta: {
        fontSize: 28,
        lineHeight: 40,
        fontWeight: "bold",
        color: "#464646",
    },
    fazenda:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:12,
    },
    NomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
    },
    logoFazenda: {
        width: 32,
        height: 32,
        marginRight:12,
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
    }
});