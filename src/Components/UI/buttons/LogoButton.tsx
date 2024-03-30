import IconButton from '@mui/material/IconButton'
import React from 'react'
import { Link } from 'react-router-dom'

const LogoButton: React.FC = () => {
    return (
        <Link to={'/'}>
            <IconButton
                style={{
                    fontFamily: 'Montserrat',
                    fontWeight: 700,
                    fontSize: '25px',
                    textDecoration: 'none',
                    color: 'black',
                }}
            >
                QPICK
            </IconButton>
        </Link>
    )
}

export default LogoButton
