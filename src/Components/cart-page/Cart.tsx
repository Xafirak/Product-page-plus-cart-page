import React, { useEffect, useState } from 'react'
import TotalPrice from './TotalPrice'
import CartList from './CartList'
import { Box } from '@mui/material'

export interface ICartData {
    [name: string]: {
        price: number
        quantity: number
        totalPrice: number
    }
}

const Cart: React.FC = () => {
    const [cartData, setCartData] = useState<ICartData>({})
    const [totalPrice, setTotalPrice] = useState<number>(0)

    useEffect(() => {
        const updateData = () => {
            const data = sessionStorage.getItem('cart')
            if (data !== null) {
                const list: ICartData = JSON.parse(data)
                const totalAmount = Object.values(list).reduce(
                    (acc, item) => acc + item.totalPrice,
                    0
                )
                setCartData(list)
                setTotalPrice(totalAmount)
            }
        }
        updateData()
        window.addEventListener('click', updateData)
        return () => {
            window.removeEventListener('click', updateData)
        }
    }, [])

    return (
        <Box marginBottom="4vh" display="flex" justifyContent="space-between">
            <CartList cartData={cartData} setCartData={setCartData} />
            <TotalPrice overallPrice={totalPrice} />
        </Box>
    )
}

export default Cart
