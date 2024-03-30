import React from 'react'
import { IDiscountProduct, IHeadphones } from '../store/products'
import Product from './Product'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography/'
import Grid from '@mui/material/Grid/'

interface IProductTypeProps {
    productType: string
    products: IHeadphones[]
    discount: IDiscountProduct[]
}

const ProductType: React.FC<IProductTypeProps> = ({
    productType,
    products,
    discount,
}) => {
    const findDiscountOfProduct = (
        array1: IHeadphones,
        array2: IDiscountProduct[]
    ): number | undefined => {
        return array2.find(
            (discountProduct) => discountProduct.title === array1.title
        )?.discount
    }

    return (
        <Box display="flex" flexDirection="column" marginTop="2vh">
            <Typography
                fontFamily={'Montserrat'}
                fontWeight={600}
                fontSize={'20px'}
                color="#838383"
                alignContent="flex-start"
                marginBottom="15px"
            >
                {productType}
            </Typography>
            <Grid
                container
                display="flex"
                flexGrow={1}
                gap="55px"
                flexWrap="wrap"
            >
                {products.map((item, index) => (
                    <Grid
                        item
                        key={index}
                        sx={{
                            minWidth: '350px',
                            minHeight: '400px',
                        }}
                    >
                        <Product
                            product={item}
                            {...(typeof findDiscountOfProduct(
                                item,
                                discount
                            ) === 'number'
                                ? {
                                      discount: findDiscountOfProduct(
                                          item,
                                          discount
                                      ),
                                  }
                                : {})}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default ProductType
