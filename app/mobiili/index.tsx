import { coupons, kauppaImages } from '../../misc/constants'
import { couponStore } from '../../misc/couponStore'
import { AntDesign } from '@expo/vector-icons'
import { Image } from 'expo-image'
import * as Location from 'expo-location'
import { useNavigation, useRouter } from 'expo-router'
import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import MapView from 'react-native-maps'
import { SafeAreaView } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: '100%',
    height: 210
  }
})

const startRegion = {
  latitude: 61.475496,
  longitude: 23.978478,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}

const IndexRoute = observer(() => {
  useEffect(() => {
    Location.getBackgroundPermissionsAsync().then(permission => {
      console.log(permission)
    })
  }, [])

  const router = useRouter()

  return (
    <ScrollView className="flex bg-[#FEFFFE] h-max">
      <View className="max-h-80">
        <MapView region={startRegion} showsUserLocation style={styles.map} />
      </View>
      <View>
        <TouchableOpacity style={{ marginTop: 30 }}>
          <Image source={require('../../bonus.png')} style={{ height: 100 }} />
        </TouchableOpacity>

        <View className="px-7 py-4 overflow-hidden">
          <View className="flex flex-row items-center justify-between mt-4 mb-4">
            <Text className="text-xl font-bold">Edut ja vinkit</Text>

            <TouchableOpacity className="px-4 py-2 m-2 bg-[#F5F5F5] rounded-2xl">
              <Text className="text-[#007A42] ">Näytä kaikki</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal className="flex flex-row gap-6">
            {/*  tabbar*/}
            <View>
              <Text className="text-base mb-2">Suosittelemme</Text>
              <View style={{ height: 1, backgroundColor: 'black' }}></View>
            </View>
            <Text className="text-base mb-2">Omat suosikit</Text>
            <Text className="text-base">Lähellä</Text>
            <Text className="text-base">Uusimmat</Text>
          </ScrollView>
        </View>
      </View>

      <View className=" py-4 overflow-hidden">
        <ScrollView horizontal className="flex flex-row">
          {couponStore.coupons.map((kuponki, index) => (
            <TouchableOpacity
              onPress={() => {
                couponStore.selectCoupon(kuponki.id)
                router.push('/kuponki/kuponkiSivu')
              }}
              style={{ paddingLeft: index === 0 ? 28 : 0, paddingRight: 28 }}
              key={kuponki.text1}
            >
              <Image
                source={
                  kuponki.redeemed
                    ? require('../../liittymisetukaytetty.jpeg')
                    : require('../../liittymisetu.png')
                }
                style={{ height: 120, width: 210, borderRadius: 12 }}
              />

              <View className="mt-2 flex flex-col max-w-[200px]">
                <View className="flex flex-row justify-between">
                  <Text className="text-base mb-2 font-bold">
                    {kuponki.text1}
                  </Text>

                  {/*<View className="opacity-40 px-3">*/}
                  {/*  <AntDesign name="hearto" size={20} color="black" />*/}
                  {/*</View>*/}
                </View>

                <Text className="text-sm mb-2">
                  {kuponki.redeemed ? kuponki.lunastettu : kuponki.voimassa}
                </Text>

                <View className="flex flex-row items-center">
                  <Image
                    source={kauppaImages[kuponki.kauppaNimi]}
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: 2222
                    }}
                  />

                  <Text className="text-sm ml-2">{kuponki.kauppa}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View className="px-7 py-4 mt-4 overflow-hidden">
          <View className="flex flex-row items-center justify-between mt-4 mb-0">
            <Text className="text-xl font-bold">Omat ostot</Text>

            <TouchableOpacity className="px-4 py-2 m-2 bg-[#F5F5F5] rounded-2xl">
              <Text className="text-[#007A42] ">Avaa palvelu</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{ marginTop: 0 }}>
            <Image
              source={require('../../ostot.jpeg')}
              style={{ height: 330 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
})

export default IndexRoute
