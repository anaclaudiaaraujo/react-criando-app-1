import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Texto from "./Texto";

export default function Botao({ texto, onPress, style }) {
    return <TouchableOpacity style={[estilo.botao, style]} onPress={onPress}>
    <Texto style={estilo.textoBotao}>{texto}</Texto>
    </TouchableOpacity>
}

const estilo = StyleSheet.create({
    botao: {
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 20,
        lineHeight: 26,
        textTransform: "uppercase",
        fontWeight: "bold"
    },
})