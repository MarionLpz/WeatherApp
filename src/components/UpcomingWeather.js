/* eslint-disable react-native/no-color-literals */
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native'
import { Feather } from '@expo/vector-icons'

const DATA = [
  {
    dt_txt: '2023-02-18 12:00:00',
    main: {
      temp_max: 8,
      temp_min: 7,
    },
    weather: [
      {
        main: 'clear',
      },
    ],
  },
  {
    dt_txt: '2023-02-18 15:00:00',
    main: {
      temp_max: 7,
      temp_min: 6,
    },
    weather: [
      {
        main: 'clouds',
      },
    ],
  },
  {
    dt_txt: '2023-02-18 18:00:00',
    main: {
      temp_max: 5,
      temp_min: 4,
    },
    weather: [
      {
        main: 'rain',
      },
    ],
  },
]

const Item = (props) => {
  const { dt_txt, min, max, condition } = props
  return (
    <View style={styles.item}>
      <Feather name={'sun'} size={50} color={'white'} />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <Text>Météo à venir</Text>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={styles.image}
      >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'royalblue',
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
  image: {
    flex: 1,
  },
  item: {
    alignItems: 'center',
    backgroundColor: 'pink',
    borderWidth: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 20,
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
})
export default UpcomingWeather
