import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'

const FavoriteButton: React.FC  = () => {
    return (
        <Link to={'#'}>
            <IconButton>
                <Badge badgeContent={4} color="secondary">
                    <FavoriteBorderIcon color="disabled" />
                </Badge>
            </IconButton>
        </Link>
    )
}

export default FavoriteButton
