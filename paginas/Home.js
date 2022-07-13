import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import Cadastro from './Cadastro';
import { todosContatos } from './Model';

export default function Home({navigation}) {
  const [dadosContatos, setDadosContatos] = useState([]);


  async function buscarContatos(){
    const resultado = await todosContatos();
    if(resultado) {
      setDadosContatos(resultado);

    }else{
      Alert.alert('Sem contatos');
      setDadosContatos('');
    }
  }

  useEffect(async ()=> {
    const resp = await buscarContatos();
    setDadosContatos(resp);
  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.contatos}> Contatos </Text>

      <TouchableOpacity style={styles.btnCadastrar} onPress={()=>navigation.navigate('Cadastro')}>
        <Text style={styles.txtCadastrar}> Cadastrar Contatos </Text>
      </TouchableOpacity>

      <FlatList 
        data={dadosContatos}
        keyExtractor={dadosContatos => dadosContatos.id}
        renderItem={({item})=>

        <TouchableOpacity style={styles.btnDados}>
          <Text style={styles.txtDados}> {item.id} </Text>
          <Text style={styles.txtDados}> {item.nome} </Text>
          <Text style={styles.txtDados}> {item.fone} </Text>
          <Text style={styles.txtDados}> {item.email} </Text>
        </TouchableOpacity>
      }

      />
      
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

  contatos: {
    fontSize: 48,
  },  

  btnCadastrar: {
    backgroundColor: 'black',
    margin: 15,
    padding: 15,
    borderRadius: 10,
  },

  txtCadastrar: {
    color: 'white',
    textAlign: 'center',
  },

  btnDados: {
    backgroundColor: 'black',
    margin: 15,
    padding: 15,
    borderRadius: 10,
  },

  txtDados: {
    color: 'white',
    textAlign: 'center',
  },

});
