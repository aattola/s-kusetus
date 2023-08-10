import { stores } from '../../misc/constants'
import { couponStore } from '../../misc/couponStore'
import { AntDesign } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

const Kuponki = observer(() => {
  const [loading, setLoading] = useState(false)

  function handlePress() {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      couponStore.redeemCoupon(1)
    }, 2000)
  }

  const kuponki = couponStore.selectedCoupon

  return (
    <View className="h-full">
      <ScrollView>
        <View>
          <Image
            source={
              kuponki.redeemed
                ? require('../../liittymisetukaytetty.jpeg')
                : require('../../liittymisetu.png')
            }
            style={{ height: 230 }}
          />
        </View>

        <View className="px-6">
          <View className="flex flex-row justify-between my-4 items-center pb-1">
            <Text className="text-sm">Etukuponki</Text>
            <View className="opacity-40">
              <AntDesign name="hearto" size={20} color="black" />
            </View>
          </View>

          <View className="flex flex-col gap-2">
            <Text className="text-lg mb-1 font-bold">{kuponki.text1}</Text>
          </View>
        </View>

        {kuponki.redeemed && (
          <View className="bg-gray-200 px-6 py-6 my-2">
            <Text className="text-lg">{kuponki.lunastettu}</Text>
          </View>
        )}

        <View className="px-6">
          <View className="flex flex-col gap-2">
            <Text className="text-base ml-2">{kuponki.longText}</Text>

            <Text className="text-sm mb-2 text-gray-700">
              {kuponki.voimassa}
            </Text>
          </View>

          <View className="flex flex-col gap-2 mt-5">
            <Text className="text-base mb-1 font-bold">Edun toimipaikat</Text>

            {stores.map(store => (
              <View
                key={store.name}
                className="flex flex-row justify-between items-center content-center"
              >
                <View className="flex flex-row items-center">
                  <Image
                    source={require('../../prismalogo.jpg')}
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 2222
                    }}
                  />

                  <View className="flex flex-col ml-1">
                    <Text className="text-sm ml-2">{store.name}</Text>
                    <Text className="text-sm ml-2 text-gray-700">
                      {store.time}
                    </Text>
                  </View>
                </View>

                <View className="opacity-25">
                  <AntDesign name="right" size={24} color="black" />
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {!kuponki.redeemed && (
        <TouchableOpacity
          onPress={handlePress}
          className="absolute bottom-6 h-[65px] left-0 w-full bg-green-700 flex text-center justify-center content-center items-center"
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text className="text-white font-bold text-lg">Näytä Kassalla</Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  )
})

export default Kuponki
