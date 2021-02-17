import React, { useState} from 'react';
import { Text, StyleSheet, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Platform  } from 'react-native';
import Cita from './component/Cita';
import Formulario from './component/Formulario';


const App = () => {
  // definir el state de citas
  const [citas, setCitas] = useState([]);
  const [mostrarform, guardarMostrarForm] = useState(false);


  // Elimina los pacientes del state
  const eliminarPaciente = id => {

    const citasFiltradas = citas.filter( cita => cita.id !== id );
    setCitas( citasFiltradas );
    guardarCitasStorage(JSON.stringify(citasFiltradas));
  }

  // Muestra u oculta el Formulario
  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarform);
  }

  // Ocultar el teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  }

  

  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado() }>
      <View style={styles.contenedor}>
          <Text style={styles.titulo}>Administrador de Citas</Text>

          <View>
              <TouchableHighlight onPress={ () => mostrarFormulario() } style={styles.btnMostrarForm}>
                  <Text style={styles.textoMostrarForm}> {mostrarform ? 'Cancelar Crear Cita' : 'Crear Nueva Cita'} </Text>
              </TouchableHighlight>
          </View>

          <View style={styles.contenido}>
            { mostrarform ? (
              <>
                <Text style={styles.titulo}>Crear Nueva Cita</Text>
                <Formulario 
                  citas={citas}
                  setCitas={setCitas}
                  guardarMostrarForm={guardarMostrarForm}
                  
                />
              </>
            ) : (
              <>
                <Text style={styles.titulo}> {citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'} </Text>
                <FlatList 
                    style={styles.listado}
                    data={citas}
                    renderItem={ ({item}) => <Cita item={item} eliminarPaciente={eliminarPaciente} />  }
                    keyExtractor={ cita => cita.id}
                    overScrollMode='auto'
                />
              </>
            ) }
            
          
          </View>

      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1
  },
  titulo: {
    color: '#FFF',
    marginTop: Platform.OS === 'ios' ?  40  : 20 ,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }, 
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
      padding: 10,
      backgroundColor:'#7d024e',
      marginVertical: 10
  },
  textoMostrarForm: {
      color: '#FFF',
      fontWeight: 'bold',
      textAlign: 'center'
  }
});

export default App;
