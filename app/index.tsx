import { useRouter } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Index = () => {
  const router = useRouter()
  return (
    <View>
      <Text>INDEX</Text>

      <Button title="Sinneva" onPress={() => router.push('/mobiili')} />
    </View>
  )
}

export default Index
