import React from 'react'
import { IHeadphones } from '../store/products'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import GradeIcon from '@mui/icons-material/Grade'
import { Box, IconButton } from '@mui/material'
import { ICartData } from 'Components/cart-page/Cart'

interface IProductProps {
    product: IHeadphones
    discount?: number
}
const Product: React.FC<IProductProps> = ({ product, discount }) => {
    const { title, price, image, rating } = product

    const discountPrice = discount
        ? Math.floor(price - (price * parseInt(discount + '%')) / 100)
        : price

    const addProductToCart = (name: string, price: number) => {
        const data = sessionStorage.getItem('cart')
        let cartList: ICartData = {}
        if (data !== null) {
            cartList = JSON.parse(data)
        }
        if (cartList[name]) {
            cartList[name].quantity += 1
            cartList[name].totalPrice = cartList[name].quantity * price
        } else {
            cartList[name] = {
                price: price,
                quantity: 1,
                totalPrice: price,
            }
        }

        sessionStorage.setItem('cart', JSON.stringify(cartList))
    }

    return (
        <Card
            sx={{
                height: '400px',
                borderRadius: '30px',
                boxShadow: '0px 0px 20px 0px #0000001A',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt={title}
                sx={{ paddingTop: '15px', objectFit: 'contain' }}
            />
            <CardContent
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '300px',
                }}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    height="11vh"
                >
                    <Typography
                        fontSize="17px"
                        fontWeight="600"
                        fontFamily="Montserrat"
                    >
                        {title}
                    </Typography>
                    <Typography
                        fontSize="17px"
                        fontWeight="600"
                        fontFamily="Montserrat"
                        color="#838383"
                        display="flex"
                    >
                        <GradeIcon style={{ color: '#FFCE7F' }} /> &nbsp;
                        {rating}
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="flex-end"
                >
                    {discount ? (
                        <>
                            <Typography
                                fontWeight="600"
                                fontSize="17px"
                                fontFamily="Montserrat"
                                color="orange"
                            >
                                {discountPrice} ₽
                            </Typography>
                            <Typography
                                fontWeight="600"
                                fontSize="13px"
                                fontFamily="Montserrat"
                                color="#FFCE7F"
                                style={{
                                    textDecoration: 'line-through',
                                }}
                            >
                                {price} ₽
                            </Typography>
                        </>
                    ) : (
                        <Typography
                            fontWeight="600"
                            fontSize="17px"
                            fontFamily="Montserrat"
                            color="orange"
                        >
                            {price} ₽
                        </Typography>
                    )}
                    <IconButton
                        style={{
                            fontFamily: 'Montserrat',
                            fontWeight: 700,
                            fontSize: '17px',
                            textDecoration: 'none',
                            color: 'black',
                        }}
                        onClick={(e) => addProductToCart(title, discountPrice)}
                    >
                        Купить
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Product
