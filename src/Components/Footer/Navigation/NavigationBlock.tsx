import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import React from 'react'
import { Link } from 'react-router-dom'
import LangChange from '../../UI/Languages/LangChange'
import { styled } from '@mui/system'

const StyledLink = styled(Link)({
    fontSize: '17px',
    textDecoration: 'none',
    color: 'black',
    ':hover': {
        color: '#ffa542',
        filter: 'drop-shadow(0 0 5px #ffa542)',
    },
})

const NavigationBlock: React.FC = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Stack direction="row" spacing={'10vw'}>
                <Stack direction="column" spacing={1}>
                    <StyledLink to={'#'}>Избранное</StyledLink>
                    <StyledLink to={'/productCart'}>Корзина</StyledLink>
                    <StyledLink to={'#'}>Контакты</StyledLink>
                </Stack>
                <Stack direction="column" spacing={1}>
                    <StyledLink to={'#'}>Условия сервиса</StyledLink>
                    <LangChange />
                </Stack>
            </Stack>
        </Box>
    )
}

export default NavigationBlock
