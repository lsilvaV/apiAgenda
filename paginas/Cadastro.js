import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { todosContatos } from './Model';

export default function Cadastro({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Cadastro de Contatos </Text>

            <TextInput style={styles.textInput} placeholder='Digite o código do contato' />
            <TextInput style={styles.textInput} placeholder='Digite o nome do contato' />
            <TextInput style={styles.textInput} placeholder='Digite o telefone do contato' />
            <TextInput style={styles.textInput} placeholder='Digite o email do contato' />
            
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.txtBtn}> Salvar o contato </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },

    titulo: {
        position: 'absolute',
        top: '16%',
        fontSize: 32,
        fontWeight: 'bold',

    },

    textInput: {
        backgroundColor: '#F3D4FF',
        width: '70%',
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
        paddingBottom: 8,
        borderRadius: 16,
    },

    btn: {
        width: '50%',
        height: '4%',
        backgroundColor: 'black',
        borderRadius: 16,
        paddingTop: 5,
        top: 40,
    },

    txtBtn: {
        color: 'white',
        textAlign: 'center',
    }
});