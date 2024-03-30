import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddRemoveButtons from 'Components/UI/buttons/AddRemoveButtons'

interface IProductInListProps {
    image: string
    productName: string
    price: number
    quantity: number
    totalPrice: number
    increaseProduct: (name: string, price: number) => void
    decreaseProduct: (name: string) => void
    deleteProduct: (name: string) => void
}
const ProductInList: React.FC<IProductInListProps> = ({
    image,
    productName,
    price,
    quantity,
    totalPrice,
    increaseProduct,
    decreaseProduct,
    deleteProduct,
}) => {
    const formatPrice = (x: number): string => {
        const res = x.toLocaleString('ru-RU')
        return res
    }

    const increase = () => {
        increaseProduct(productName, price)
    }

    const decrease = () => {
        decreaseProduct(productName)
    }
    return (
        <Card
            sx={{
                height: '220px',
                width: '630px',
                borderRadius: '30px',
                boxShadow: '0px 0px 20px 0px #0000001A',
            }}
        >
            <CardContent
                style={{
                    padding: '0px',
                    margin: '5px 20px',
                    display: 'flex',
                    gap: '1.5rem',
                    alignItems: 'center',
                }}
            >
                <Box>
                    <CardMedia
                        component="img"
                        height="150px"
                        image={image}
                        alt={productName}
                    />
                    <AddRemoveButtons
                        quantity={quantity}
                        increase={increase}
                        decrease={decrease}
                    />
                </Box>
                <Box flexGrow="1">
                    <Typography
                        fontSize="17px"
                        fontWeight="600"
                        fontFamily="Montserrat"
                    >
                        {productName}
                    </Typography>
                    <Typography
                        fontWeight="600"
                        fontSize="17px"
                        fontFamily="Montserrat"
                        color="#AAAAAA"
                    >
                        {formatPrice(price)} ₽
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    height="200px"
                    marginRight="5px"
                >
                    <IconButton
                        aria-label="delete"
                        color="error"
                        style={{
                            marginLeft: 'auto',
                            height: '40px',
                            width: '40px',
                        }}
                        onClick={(e) => deleteProduct(productName)}
                    >
                        <DeleteForeverIcon color="error" />
                    </IconButton>
                    <Typography
                        fontWeight="600"
                        fontSize="17px"
                        fontFamily="Montserrat"
                        marginBottom="1 5px"
                    >
                        {formatPrice(totalPrice)} ₽
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default ProductInList
