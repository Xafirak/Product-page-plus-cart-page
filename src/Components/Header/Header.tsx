import Stack from '@mui/material/Stack'
import React, { useEffect, useState } from 'react'
import LogoButton from '../UI/buttons/LogoButton'
import FavoriteButton from '../UI/buttons/FavoriteButton'
import CartButton from '../UI/buttons/CartButton'
import { ICartData } from '../cart-page/Cart'

const Header: React.FC = () => {
    const [quantityOfProducstInCart, setQuantityOfProducstInCart] =
        useState<number>(0)

    useEffect(() => {
        const updateQuantity = () => {
            const data = sessionStorage.getItem('cart')
            if (data === null) {
                return undefined
            }
            const list: ICartData = JSON.parse(data)
            const totalItems = Object.values(list).reduce(
                (acc, item) => acc + item.quantity,
                0
            )

            setQuantityOfProducstInCart(totalItems)
        }
        updateQuantity()
        window.addEventListener('click', updateQuantity)
        return () => {
            window.removeEventListener('click', updateQuantity)
        }
    }, [])

    return (
        <Stack  width="70%" alignItems="center" height="60px" direction="row">
            <LogoButton />
            <Stack
                flexGrow={1}
                justifyContent="flex-end"
                direction="row"
                spacing={4}
            >
                <FavoriteButton />
                <CartButton quantity={quantityOfProducstInCart} />
            </Stack>
        </Stack>
    )
}

export default Header
