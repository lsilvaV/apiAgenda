import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const nav = createNativeStackNavigator();

import Home from '../paginas/Home';
import Cadastro from '../paginas/Cadastro';

export default function Rotas() {
  return (
    <NavigationContainer>
      <nav.Navigator> 
          <nav.Screen name="Home" component={Home} />
          <nav.Screen name="Cadastro" component={Cadastro} />
      </nav.Navigator>
    </NavigationContainer>
  );
}