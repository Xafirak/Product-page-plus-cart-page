import Stack from '@mui/material/Stack'
import React from 'react'
import LogoButton from '../UI/buttons/LogoButton'
import NavigationBlock from './Navigation/NavigationBlock'
import Socials from './Navigation/Socials'
import { Paper } from '@mui/material'

const Footer: React.FC = () => {
    return (
        <Paper
            style={{
                width: '70%',
                minWidth: '600px',
                borderRadius: '30px 30px 0 0',
            }}
            elevation={3}
        >
            <Stack
                padding="15px"
                justifyContent="space-between"
                height="150px"
                direction="row"
            >
                <LogoButton />
                <NavigationBlock />
                <Socials />
            </Stack>
        </Paper>
    )
}

export default Footer
