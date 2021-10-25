import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

export default function App() {

  const [expression, setExpression] = useState("0");
  const buttonsList = [
    { buttons: '0' },
    { buttons: '1' },
    { buttons: '2' },
    { buttons: '3' },
    { buttons: '4' },
    { buttons: '5' },
    { buttons: '6' },
    { buttons: '7' },
    { buttons: '8' },
    { buttons: '9' },
    { buttons: 'C' },
    { buttons: '=' }
  ]

  const expressionList = [
    { expression: '/' },
    { expression: '*' },
    { expression: '+' },
    { expression: '-' },
    { expression: '.' }
  ]

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{expression}</Text>
      </View>
      <View style={styles.inputContainer}>
        <FlatList
          contentContainerStyle={styles.flatlistButtons}
          data={buttonsList}
          keyExtractor={value => value.buttons}
          numColumns={4}
          renderItem={({ item }) => {
            if (item.buttons === 'C' || '=') {
              if (item.buttons === 'C') {
                return (
                  <CalcButton inputValue="C" onPress={() => setExpression("0")} />
                )
              }

              if (item.buttons === '=') {
                return (
                  <CalcButton inputValue="=" onPress={() => setExpression(eval(expression))} />
                )
              }
            };
            return (
              <CalcButton inputValue={item.buttons} onPress={() =>
                setExpression(expression === "0"
                  ? (item.buttons)
                  : expression + '' + (item.buttons))} />
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
    justifyContent: 'center',
  },

  resultContainer: {
    width: '90%',
    backgroundColor: '#a8a8a8',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },

  result: {
    fontSize: 50,
    marginVertical: 15,
    width: '90%',
    backgroundColor: '#c7c7c7',
    textAlign: 'center'
  },

  inputContainer: {
    backgroundColor: '#c4c4c4',
    width: '90%',
    alignItems: 'center',
    paddingBottom: 20
  },

  flatlistButtons: {
    height: 1,
    flexGrow: 0,
    minHeight: 195,
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
  },

  flatlistExpressions: {
    height: 1,
    flexGrow: 0,
    minHeight: 70,
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
  },

  inputButton: {
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '17%',
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
