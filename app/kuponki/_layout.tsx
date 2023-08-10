import { AntDesign } from '@expo/vector-icons'
import { Stack, Tabs, useRouter } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Layout = () => {
  const router = useRouter()
  return (
    <Stack>
      <Stack.Screen
        name="kuponkiSivu"
        options={{
          headerShown: true,
          title: '',
          headerRight: () => (
            <TouchableOpacity className="px-4 py-2 bg-[#F5F5F5] rounded-2xl">
              <Text className="text-[#007A42] ">Näytä kaikki</Text>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
          ),
          presentation: 'modal'
        }}
      />
    </Stack>
  )
}

export default Layout
