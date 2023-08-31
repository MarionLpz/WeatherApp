import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>La météo du jour</Text>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6°</Text>
        <Text style={styles.feels}>Ressenti 5°</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>Maximale: 8°</Text>
          <Text style={styles.highLow}>Minimale: 5°</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>C'est ensoleillé</Text>
        <Text style={styles.message}>Dégaine ton meilleur t-shirt</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
})

export default CurrentWeather
