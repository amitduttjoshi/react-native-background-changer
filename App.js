import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const App = () => {
  const [state, setState] = useState ({bgColor: '#f90213'});
  return (
    <View style={[styles.container, {backgroundColor: state.bgColor}]}>
      <TouchableOpacity onPress={() => setState ({bgColor: randomRGB ()})}>
        <Text style={styles.btn}>Change Color</Text>
      </TouchableOpacity>
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor (Math.random () * 256);
  const green = Math.floor (Math.random () * 256);
  const blue = Math.floor (Math.random () * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    color: '#FFF',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#cccccc',
    backgroundColor: '#222222',
    padding: 10,
    margin: 5,
  },
});

export default App;
