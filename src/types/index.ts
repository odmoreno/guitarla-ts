//interface Guitar  {
export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

//export interface CartItem extends Guitar {
export type CartItem = Guitar &{
//export type cartItem = Pick <Guitar, 'id'| 'name' | 'price' > & {
    quantity: number
}

//export type GuitarID = Guitar['id']

//export type cartItem = Omit <Guitar, 'id'| 'name' | 'price' > & {
//    quantity: number
//}
