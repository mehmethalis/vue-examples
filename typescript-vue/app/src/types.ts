export type Restaurant = {
  id: string
  name: string
  status: Status
  address: string
  website: string
  diet?: Diet
}

export type Dish = {
  id: string
  name: string
  status: Status
  diet?: Diet
}
type Status = 'Want to Try' | 'Recommended' | 'Do Not Recommend'

type Diet = 'Vegetarian' | 'Pescetarian' | 'Keto' | ''
