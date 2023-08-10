export const stores = [
  {
    name: 'Prisma Kangasala',
    time: '0,5 km   07:00 - 23:00'
  },
  {
    name: 'Prisma Linnainmaa',
    time: '7,2 km   07:00 - 23:00'
  },
  {
    name: 'Prisma Kaleva',
    time: '9,2 km   24h'
  }
] as const

export const kauppaImages = {
  Prisma: require('../prismalogo.jpg'),
  'S-market': require('../s-market.png'),
  Sale: require('../sale.png')
}

export const coupons = [
  {
    id: 1,
    text1: 'Prisma kestokassi ilmaiseksi',
    voimassa: 'Voimassa 31.12.2023 asti',
    kauppa: 'Prisma Kangasala (+9)',
    redeemed: false,
    lunastettu: '',
    longText: 'plaaaplaa',
    kauppaNimi: 'Prisma'
  },
  {
    id: 2,
    text1: 'Prisma-ostorahaa 20 €',
    voimassa: 'Voimassa 31.12.2023 asti',
    kauppa: 'Prisma Kangasala (+9)',
    redeemed: false,
    lunastettu: '',
    longText: 'plaaaplaa',
    kauppaNimi: 'Prisma'
  },
  {
    id: 3,
    text1: 'S-market-ostorahaa 20 €',
    voimassa: 'Voimassa 31.12.2023 asti',
    kauppa: 'S-market Kangasala (+27)',
    redeemed: false,
    lunastettu: '',
    longText: 'plaaaplaa',
    kauppaNimi: 'S-market'
  }
]
