import { Stack, Tabs } from 'expo-router'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Layout = () => {
  return (
    <SafeAreaProvider>
      <Tabs>
        <Tabs.Screen
          name="koti"
          options={{ headerShown: false, title: 'Koti' }}
        />
        <Tabs.Screen
          name="index"
          options={{ headerShown: false, title: 'Oma kauppa' }}
        />
        <Tabs.Screen
          name="maksu"
          options={{ headerShown: false, title: 'Maksu' }}
        />
        <Tabs.Screen
          name="pankki"
          options={{ headerShown: false, title: 'Pankki' }}
        />
        <Tabs.Screen
          name="mina"
          options={{ headerShown: false, title: 'Minä' }}
        />
      </Tabs>
    </SafeAreaProvider>
  )
}

export default Layout
