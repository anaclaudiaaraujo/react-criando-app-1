import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";

import topo from '../../assets/topo.png';
import icoFazenda from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalhe da Cesta</Text>

        <View style={estilos.cesta}>
            <Text style={estilos.tituloCesta}>Cesta de Verduras</Text>
            <View style={estilos.fazenda}>
                <Image style={estilos.logoFazenda} source={icoFazenda} />
                <Text style={estilos.NomeFazenda}>Jenny Jack Farm</Text>
            </View>

            <Text style={estilos.descricaoCesta}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha.</Text>
            <Text style={estilos.precoCesta}>R$ 40,00</Text>
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
        fontWeight: "normal",
        color: "#464646",
        fontFamily:"MontserratBold",
    },
    fazenda:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:12,
    },
    NomeFazenda: {
        fontSize: 18,
        lineHeight: 26,
        fontFamily:"MontserratRegular",
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
        fontFamily:"MontserratRegular",
    },
    precoCesta: {
        fontSize: 26,
        fontWeight: "normal",
        color: "#2A9F85",
        lineHeight: 42,
        marginTop: 8,
        fontFamily:"MontserratBold",
    }
});