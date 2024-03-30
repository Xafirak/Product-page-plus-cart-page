//@ts-ignore ТС опять ругается на изображение
import VKIcon from '../../../assets/icons/vk'
import { Stack } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import IconButton from '@mui/material/IconButton'
import React from 'react'
import { Link } from 'react-router-dom'

const Socials: React.FC = () => {
    return (
        <Stack direction="row" spacing={1}>
            <Link to={'#'}>
                <IconButton>
                    <TelegramIcon style={{ color: 'black' }} />
                </IconButton>
            </Link>
            <Link to={'#'}>
                <IconButton>
                    <WhatsAppIcon style={{ color: 'black' }} />
                </IconButton>
            </Link>
            <IconButton style={{ height: 40, width: 40 }}>
                <img src={VKIcon} alt="vk" style={{ height: 24, width: 24 }} />
            </IconButton>
        </Stack>
    )
}

export default Socials
