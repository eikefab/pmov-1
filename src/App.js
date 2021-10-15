import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

export default function App() {

  const [ expression, setExpression ] = useState("0");
  const numberList = [
    {number: '0'},
    {number: '1'}, 
    {number: '2'}, 
    {number: '3'}, 
    {number: '4'}, 
    {number: '5'}, 
    {number: '6'}, 
    {number: '7'}, 
    {number: '8'}, 
    {number: '9'},
    {number: 'C'},
    {number: '='}
  ]

  const expressionList = [
    {expression: '/'}, 
    {expression: '*'}, 
    {expression: '+'}, 
    {expression: '-'}, 
    {expression: '.'}
  ]

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{expression}</Text>
      </View>
      <View style={styles.inputContainer}>
        <FlatList
        contentContainerStyle={styles.flatlistNumbers}
        data={numberList}
        keyExtractor={value => value.number}
        numColumns={4}
        renderItem={({ item }) => {
          if (item.number === 'C' || '=') {
            if (item.number === 'C') {
              return (
                <CalcButton inputValue="C" onPress={() => setExpression("0")} />
              )
            }

            if (item.number === '=') {
              return (
                <CalcButton inputValue="=" onPress={() => setExpression(eval(expression))} />
              )
            }
          };
          return (
            <CalcButton inputValue={item.number} onPress={() => 
              setExpression(expression === "0" 
              ? (item.number) 
              : expression + '' + (item.number))} />
          );
        }}
        >
          
        </FlatList>
        <FlatList
        contentContainerStyle={styles.flatlistExpressions}
        data={expressionList}
        keyExtractor={value => value.expression}
        numColumns={4}
        renderItem={({ item }) => {
          return (
            <CalcButton 
            inputValue={item.expression} onPress={() => 
              setExpression(expression + item.expression)} />
          );
        }}
        >
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },

  resultContainer: {
    width: '90%',
    backgroundColor: '#a8a8a8',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  
  result: {
    fontSize: 50
  },

  inputContainer: {
    backgroundColor: '#c4c4c4',
    width: '90%',
    alignItems: 'center',
    paddingBottom: 20
  },

  flatlistNumbers: {
    height: 1,
    flexGrow: 0,
    minHeight: 195,
    backgroundColor: '#d9d9d9',
  },

  flatlistExpressions: {
    height: 1,
    flexGrow: 0,
    minHeight: 70,
    backgroundColor: '#d9d9d9'
  },

  inputButton: {
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  inputText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const CalcButton = (props) => {
  return (
    <Pressable style={styles.inputButton} onPress={props.onPress}>
      <Text style={styles.inputText}>{props.inputValue}</Text>
    </Pressable>
  )
}
