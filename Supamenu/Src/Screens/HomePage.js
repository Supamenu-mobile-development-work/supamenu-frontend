import * as React from 'react';
import {View,Text,StyleSheet } from 'react-native';
import { backgroundColor } from './Colors';
import Button from './Button';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Supa<Text style={styles.menu}>Menu</Text></Text>
      <Button backgroundColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: backgroundColor,   
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  menu: {
    color: 'white',
  }
})


export default HomePage; 