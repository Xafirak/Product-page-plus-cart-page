import React from 'react'
import ProductType from '../catalog-page/ProductType'
import {
    discountProduct,
    headphones,
    wirelessHeadphones,
} from '../store/products'
import Box from '@mui/material/Box'

const ProductsPage: React.FC = () => {
    return (
        <Box marginBottom="4vh">
            <ProductType
                productType="Наушники"
                products={headphones}
                discount={discountProduct}
            />
            <ProductType
                productType="Беспроводные наушники"
                products={wirelessHeadphones}
                discount={discountProduct}
            />
        </Box>
    )
}

export default ProductsPage
