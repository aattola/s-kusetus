import '../global.css'
import { Stack } from 'expo-router/stack'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="mobiili"
        options={{ headerShown: false, title: 'Oma kauppa' }}
      />
      <Stack.Screen
        name="kuponki"
        options={{ headerShown: false, title: 'Koti', presentation: 'modal' }}
      />
    </Stack>
  )
}
