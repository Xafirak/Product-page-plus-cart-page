import { IconButton } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import React from 'react'

interface ITotalPriceProps {
    overallPrice: number
}

const TotalPrice: React.FC<ITotalPriceProps> = ({ overallPrice }) => {
    const formatPrice = (x: number): string => {
        const res = x.toLocaleString('ru-RU')
        return res
    }
    return (
        <Box>
            <Card
                sx={{
                    position: 'sticky',
                    top: '13vh',
                    height: '120px',
                    width: '350px',
                    borderRadius: '30px',
                    boxShadow: '0px 0px 20px 0px #0000001A',
                }}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    margin=" 15px 20px"
                >
                    <Typography
                        fontSize="15px"
                        fontWeight="600"
                        fontFamily="Montserrat"
                    >
                        ИТОГО
                    </Typography>
                    <Typography
                        fontWeight="600"
                        fontSize="15px"
                        fontFamily="Montserrat"
                    >
                        ₽ {formatPrice(overallPrice)}
                    </Typography>
                </Box>
                <IconButton
                    style={{
                        fontWeight: '600',
                        fontSize: '17px',
                        fontFamily: 'Montserrat',
                        borderRadius: '20px',
                        backgroundColor: 'black',
                        color: 'white',
                        height: '65px',
                        width: '350px',
                        position: 'absolute',
                        marginTop: '2px',
                    }}
                    onClick={(e) => {}}
                >
                    Перейти к оформлению
                </IconButton>
            </Card>
        </Box>
    )
}

export default TotalPrice
