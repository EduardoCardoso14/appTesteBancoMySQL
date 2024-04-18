import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Button } from 'react-native';
import { FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

function TelaUm({ navigation }) {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://172.16.42.89/apiMercado/select/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users: bom dia ', error));
  }, []);
  return (
    <View style={styles.container}>
      <Text>TELA 2 </Text>
      <Text></Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text style={styles.name}>{item.nome}</Text>
            <Text style={styles.email}>{item.valor}</Text>
          </View>
        )}
      />
      <Button title='Home' onPress={() => navigation.navigate('TelaUm')}></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
});
export default TelaUm;
