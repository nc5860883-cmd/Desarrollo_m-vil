import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, StyleSheet, Text, TextInput, Pressable, Alert, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contenido}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.titulo}>Datos personales</Text>

        <Text style={styles.etiqueta}>Nombre completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre"
          placeholderTextColor="#808080"
          autoCapitalize="words" // Actividad 2: probar 'none', 'sentences', 'words', 'characters'
        />

        <Text style={styles.etiqueta}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="usuario@correo.com"
          placeholderTextColor="#808080"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
        />

        <Text style={styles.etiqueta}>Teléfono</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su teléfono"
          placeholderTextColor="#808080"
          keyboardType="phone-pad" // Actividad 3: probar 'number-pad', 'decimal-pad', 'numeric', 'url'...
          maxLength={10} // Actividad 4
        />

        <Text style={styles.etiqueta}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su contraseña"
          placeholderTextColor="#808080"
          secureTextEntry={true} // Actividad 7: cambiar a false para ver los caracteres
          autoComplete="current-password"
        />

        <Pressable
          style={styles.boton}
          onPress={() => Alert.alert('Información', 'Botón presionado')}
        >
          <Text style={styles.textoBoton}>Presionar</Text>
        </Pressable>

        <Pressable
          style={styles.boton}
          onLongPress={() => Alert.alert('Información', 'Pulsación prolongada')}
          delayLongPress={1000} // Actividad 8: cambiar a 500 para ver la diferencia
        >
          <Text style={styles.textoBoton}>Mantenga presionado</Text>
        </Pressable>
      </ScrollView>

      <Image
        source={require('./assets/logo.png')}
        style={styles.logo}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F6F0',
  },
  contenido: {
    padding: 24,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#291334',
    marginBottom: 24,
  },
  etiqueta: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
    color: '#291334',
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#BBBBBB',
    borderRadius: 10,
    paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
    marginBottom: 18,
    fontSize: 16,
  },
  inputMultilinea: {
    height: 120,
    paddingTop: 12,
    textAlignVertical: 'top',
  },
  inputDeshabilitado: {
    backgroundColor: '#EEEEEE',
    color: '#666666',
  },
  boton: {
    backgroundColor: '#291334',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
