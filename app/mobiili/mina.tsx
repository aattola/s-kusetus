import { couponStore } from '../../misc/couponStore'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Mina = () => {
  return (
    <SafeAreaView>
      <Button
        title="Nollaa kupongit"
        onPress={() => couponStore.resetCoupons()}
      />
    </SafeAreaView>
  )
}

export default Mina
