import React from 'react';
import { Text, TouchableOpacity, View, Button, TextInput } from 'react-native';


function TelaUm({ navigation }) {
  return (
    <View>
       <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text>TELA 1 </Text>
      <Button title='Select' onPress={() => navigation.navigate('TelaDois')}></Button>

    </View>
  );
}
export default TelaUm;
