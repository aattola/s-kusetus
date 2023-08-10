import { coupons } from './constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { DateTime } from 'luxon'
import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

class CouponStore {
  coupons = coupons
  selectedCouponId: number | null = null

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: 'CouponStore',
      properties: ['coupons'],
      storage: AsyncStorage
    })
  }

  get selectedCoupon() {
    return this.coupons.find(coupon => coupon.id === this.selectedCouponId)
  }

  resetCoupons = () => {
    this.coupons = coupons
  }

  selectCoupon(couponId: number) {
    this.selectedCouponId =
      this.coupons.find(coupon => coupon.id === couponId).id ?? null
  }

  redeemCoupon(couponId: number) {
    const newCoupons = this.coupons.map(coupon => {
      const days = DateTime.now().toFormat('d.M.yyyy')
      const time = DateTime.now().toFormat('hh.mm')
      if (coupon.id === couponId) {
        return {
          ...coupon,
          redeemed: true,
          lunastettu: `Kuponki on lunastettu\n${days} klo ${time}`
        }
      }
      return coupon
    })

    this.coupons = newCoupons
  }
}

const couponStore = new CouponStore()
export { couponStore }
