import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [newCount, setNewCount] = useState(0)

  useEffect(() => {
    console.log(`Count Changed`)
  }, [count, newCount])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`count: ${count}`}</Text>
      <Button
        color={'red'}
        title="Increase"
        onPress={() => setCount(count + 1)}
      />
      <Button
        color={'green'}
        title="Decrease"
        onPress={() => setCount(count - 1)}
      />
      <Button
        color={'red'}
        title="Increase"
        onPress={() => setNewCount(count + 1)}
      />
      <Button
        color={'green'}
        title="Decrease"
        onPress={() => setNewCount(count - 1)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink'
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    marginTop: 25
  }
})

export default Counter
