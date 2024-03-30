import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ProductInList from './ProductInList'
import {
    IHeadphones,
    headphones,
    wirelessHeadphones,
} from 'Components/store/products'
import { ICartData } from './Cart'

interface ICartListProps {
    cartData: ICartData
    setCartData: React.Dispatch<React.SetStateAction<ICartData>>
}

const CartList: React.FC<ICartListProps> = ({ cartData, setCartData }) => {
    const products: IHeadphones[] = [...headphones, ...wirelessHeadphones]

    const findImage = (
        ArrayOfProducts: IHeadphones[],
        NameOfProduct: string
    ): string => {
        const product = ArrayOfProducts.find(
            (product) => product.title === NameOfProduct
        )
        if (product) {
            return product.image
        } else {
            return 'Image not found'
        }
    }

    const deleteProduct = (name: string) => {
        const data = sessionStorage.getItem('cart')
        let cartList: ICartData = {}
        if (data !== null) {
            cartList = JSON.parse(data)
        }
        for (const item in cartList) {
            if (item === name) {
                delete cartList[item]
            }
        }
        sessionStorage.setItem('cart', JSON.stringify(cartList))
        setCartData(cartList)
    }

    const decreaseQuantityOfProduct = (name: string) => {
        const data = sessionStorage.getItem('cart')
        let cartList: ICartData = {}
        if (data !== null) {
            cartList = JSON.parse(data)
            if (cartList[name].quantity !== 1) {
                cartList[name].totalPrice -= cartList[name].price
                cartList[name].quantity -= 1
            }
            sessionStorage.setItem('cart', JSON.stringify(cartList))
            setCartData(cartList)
        }
    }

    const increaseQuantityOfProduct = (name: string, price: number) => {
        const data = sessionStorage.getItem('cart')
        let cartList: ICartData = {}
        if (data !== null) {
            cartList = JSON.parse(data)
        }
        if (cartList[name]) {
            cartList[name].quantity += 1
            cartList[name].totalPrice = cartList[name].quantity * price
        }

        sessionStorage.setItem('cart', JSON.stringify(cartList))
        setCartData(cartList)
    }
    return (
        <Box marginTop="2vh">
            <Typography
                fontFamily={'Montserrat'}
                fontWeight={600}
                fontSize={'20px'}
                alignContent="flex-start"
                marginBottom="15px"
            >
                Корзина
            </Typography>
            <Grid container rowSpacing={4}>
                {Object.keys(cartData).length > 0 ? (
                    Object.keys(cartData).map((item, index) => (
                        <Grid
                            item
                            key={index}
                            xs={12}
                            sx={{
                                minWidth: '630px',
                                minHeight: '220px',
                            }}
                        >
                            <ProductInList
                                image={findImage(products, item)}
                                productName={item}
                                increaseProduct={increaseQuantityOfProduct}
                                decreaseProduct={decreaseQuantityOfProduct}
                                deleteProduct={deleteProduct}
                                {...cartData[item]}
                            />
                        </Grid>
                    ))
                ) : (
                    <Box margin="20vh">
                        <h1>Тут пока пусто!</h1>
                    </Box>
                )}
            </Grid>
        </Box>
    )
}

export default CartList
