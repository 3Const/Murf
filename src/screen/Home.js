  import {View, Text, StyleSheet, Button, TouchableOpacity, ScrollView,} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.sectionContainer}>
        <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Btn1}>button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Btn2}>button 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Btn3}>button 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Btn4}>button 4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Btn5}>button 5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Btn6}>button 6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Btn7}>button 7</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Btn8}>button 8</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Btn9}>button 9</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Btn10}>button 10</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Btn11}>button 11</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Btn12}>button 12</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Btn13}>button 13</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Btn14}>button 14</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Btn15}>button 15</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    // paddingHorizontal: 24,
    // gap: 12,
    backgroundColor: "while"
  },
  Btn1: {
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center',
    width: '75%',
    padding: 10,
    backgroundColor: 'red',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  Btn2: {
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    width: '75%',
    backgroundColor: 'blue',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  Btn3: {
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    width: '75%',
    backgroundColor: 'green',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  Btn4: {
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    width: '75%',
    backgroundColor: 'purple',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  Btn5: {
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    width: '75%',
    backgroundColor: 'orange',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  Btn6: {
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    width: '75%',
    backgroundColor: 'grey',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  Btn7: {
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    width: '75%',
    backgroundColor: '#8fbc8f',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  Btn8: {
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    width: '75%',
    backgroundColor: '#00ced1',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  Btn9: {
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    width: '75%',
    backgroundColor: '#00bfff',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  Btn10: {
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    width: '75%',
    backgroundColor: '#6b8e23',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  Btn11: {
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    width: '75%',
    backgroundColor: '#ff69b4',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  Btn12: {
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    width: '75%',
    backgroundColor: '#e6e6fa',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  Btn13: {
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    width: '75%',
    backgroundColor: '#fafad2',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  Btn14: {
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    width: '75%',
    backgroundColor: '#b0c4de',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  Btn15: {
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
    width: '75%',
    backgroundColor: '#800000',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  btn:{
    marginVertical:12,
  }
});
export default Home;
