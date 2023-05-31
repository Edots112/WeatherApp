import React from 'react'
import { View, Text } from 'react-native'

const RowText = (props) => {
  const { textOne, textTwo, textOneStyles, textTwoStyles, containerStyles } =
    props

  return (
    <View style={containerStyles}>
      <Text style={textOneStyles}>{textOne}</Text>
      <Text style={textTwoStyles}>{textTwo}</Text>
    </View>
  )
}

export default RowText
