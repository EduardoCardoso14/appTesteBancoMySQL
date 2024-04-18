import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Button,Alert} from 'react-native';
import { FlatList, StyleSheet } from 'react-native';


function TelaSelect({ navigation }) {


   

      return (
      <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuários</Text>
     <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text style={styles.name}>{item.login}</Text>
            <Text style={styles.email}>{item.senha}</Text>
            <Text style={styles.email}>{item.tempo}</Text>
          </View>
        )}/> 
      <View style={styles2.fofinhodotio}>
          <Button title='Select' onPress={() => navigation.navigate('TelaSelect')}></Button>
          <Button title='Insert' onPress={() => navigation.navigate('TelaInsert')}></Button>
          <Button title='Update' onPress={() => navigation.navigate('TelaUpdate')}></Button>
          <Button title='Delete' color='red' onPress={() => navigation.navigate('TelaDelete')}></Button>
          
        </View><Text></Text>
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

export default TelaSelect;
