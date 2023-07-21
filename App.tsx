import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'

const App = () => {

  const [data,setData] = useState([])

  useEffect(() => {
    fetch('http://192.168.1.224:3002/products')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])


  return (
    <View style={styles.container}>
      { data &&
          <Text>{ JSON.stringify(data )}</Text>
      }
    </View>
  )
}

let AppEntryPoint = App

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('./.ondevice').default
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AppEntryPoint
