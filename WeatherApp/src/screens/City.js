import React from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  StatusBar,
  ImageBackground
} from 'react-native'
import IconText from '../components/IconText'

const City = () => {
  const {
    container,
    imageLayout,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>Uk</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            name={'user'}
            color={'black'}
            text={'8000'}
            textStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            name={'sunrise'}
            color={'black'}
            text={'7:00'}
            textStyles={riseSetText}
          />
          <IconText
            name={'sunset'}
            color={'black'}
            text={'17:00'}
            textStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1,
    width: '100%'
  },
  cityName: {
    fontSize: 50
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 10
  },
  populationText: {
    fontSize: 30,
    color: 'black'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'black'
  },

  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default City
