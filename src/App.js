import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [ expression, setExpression ] = useState("0");

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.result}>{expression}</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.numberContainer}>
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
              <CalcButton inputValue={value} onPress={() => setExpression(expression + value)} />
            ))
          }

          <CalcButton inputValue="C" onPress={() => setExpression("0")} />
          <CalcButton inputValue="=" onPress={() => setExpression(eval(expression))} />
        </View>
        <View style={styles.expressionContainer}>
          {
            ['/', '*', '+', '-', '.'].map((value) => (
              <CalcButton inputValue={value} onPress={() => setExpression(expression + value)} />
            ))
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  result: {

  },
  expressionContainer: {

  },
  numberContainer: {
    flex: 1,
    width: 180,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputButton: {
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
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
