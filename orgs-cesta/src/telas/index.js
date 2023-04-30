import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import Texto from "../componentes/Texto";

import Topo from "../telas/Cesta/componentes/Topo";
import DetalhesFazenda from "./Cesta/componentes/DetalhesFazenda";
import Item from "./Cesta/componentes/Item";

export default function Cesta({ topo, detalhes, itens }) {
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                        <DetalhesFazenda {...detalhes} />
                        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulo: {
        color: "#464646",
        marginTop: 32,
        fontWeight: "bold",
        marginBottom: 15,
        fontSize: 20,
        lineHeight: 32,
    },
});