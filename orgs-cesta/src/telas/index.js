import React from "react";
import { View, StyleSheet } from "react-native";

import Topo from "../telas/Cesta/componentes/Topo";
import DetalhesFazenda from "./Cesta/componentes/DetalhesFazenda";

export default function Cesta({ topo, detalhes }) {
    return <>
        <Topo {...topo} />
        <View style={estilos.cesta}>
            <DetalhesFazenda {...detalhes} />
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});