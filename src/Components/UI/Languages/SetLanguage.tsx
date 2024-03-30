import Typography from '@mui/material/Typography'
import React from 'react'
import { styled } from '@mui/system'

interface ILanguageProps {
    langName: string
    stateLanguage: string
    changeLanguage: (x: string) => void
}

const SetLanguage: React.FC<ILanguageProps> = ({
    langName,
    stateLanguage,
    changeLanguage,
}) => {
    const getTextColor = (lang: string): string => {
        return stateLanguage === lang ? 'orange' : 'black'
    }

    const getTextWeight = (lang: string): string => {
        return stateLanguage === lang ? '700' : '500'
    }

    const StyledTypography = styled(Typography)({
        ':hover': {
            color: langName === stateLanguage ? 'black' : '#ffa542',
            filter:
                langName === stateLanguage
                    ? 'none'
                    : 'drop-shadow(0 0 5px #ffa542)',
        },
    })

    return (
        <StyledTypography
            fontSize="17px"
            fontWeight={getTextWeight(langName)}
            onClick={(e) => changeLanguage(langName)}
            fontFamily={'Montserrat'}
            color={getTextColor(langName)}
            style={{
                textDecoration: 'none',
                cursor: 'pointer',
            }}
        >
            {langName}
        </StyledTypography>
    )
}

export default SetLanguage
