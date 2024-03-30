import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'

interface ICartButtonProps {
    quantity: number
}

const CartButton: React.FC<ICartButtonProps> = ({ quantity }) => {
    return (
        <Link to={'/productCart'}>
            <IconButton>
                <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartIcon color="disabled" />
                </Badge>
            </IconButton>
        </Link>
    )
}

export default CartButton
