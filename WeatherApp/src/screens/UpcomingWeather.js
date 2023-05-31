import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

const DATA = [
  {
    dt_txt: '2022-01-01 12:00:00',
    main: {
      temp_max: 10,
      temp_min: 5
    },
    weather: [
      {
        main: 'Clouds'
      }
    ]
  },

  {
    dt_txt: '2021-01-02 13:00:00',
    main: {
      temp_max: 10,
      temp_min: 5
    },
    weather: [
      {
        main: 'Clouds'
      }
    ]
  },
  {
    dt_txt: '2021-01-01 14:00:00',
    main: {
      temp_max: 10,
      temp_min: 5
    },
    weather: [
      {
        main: 'Clouds'
      }
    ]
  }
]

const UpcomingWeather = () => {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        condition={item.weather[0].main}
        min={item.main.temp_min}
        max={item.main.temp_max}
        dt_txt={item.dt_txt}
      />
    )
  }

  const { container, image } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={image}
      >
        <Text>UpcomingWeather</Text>
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
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather
