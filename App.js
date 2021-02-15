/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList
} from 'react-native';

import Cita from './component/Cita'

const App = () => {

  console.log("prueba");

  //definir el state de citas
  const [citas, setCitas ] = useState([
    { id: "1", paciente: "hook", propietario: 'juan', sintomas: "no come 1" },
    { id: "2", paciente: "Redux", propietario: 'Roberto', sintomas: "no come 2" },
    { id: "3", paciente: "Native", propietario: 'Pancho', sintomas: "no come 3" }
  ]);

  return (
    <>
    <View style={styles.contenedor}>

      <Text style={styles.titulo} >Administrador de Citas</Text>

      <FlatList 
        data={citas}
        renderItem={ ({item}) => <Cita  item={item} /> }
        keyExtractor={ cita => cita.id }
      />
      
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor:{
    backgroundColor: '#AA076B',
    flex: 1
  },
  titulo:{
    color:'#fff',
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;
