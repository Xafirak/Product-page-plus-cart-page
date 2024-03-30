import Stack from '@mui/material/Stack'
import React, { useState } from 'react'
import LanguageIcon from '@mui/icons-material/Language'
import SetLanguage from './SetLanguage'

const LangChange: React.FC = () => {
    const [language, setLanguage] = useState<string>('Рус')

    const switchLanguage = (language: string) => {
        setLanguage(language)
    }

    return (
        <Stack direction="row" spacing={1}>
            <LanguageIcon color="disabled" />
            <SetLanguage
                langName="Рус"
                stateLanguage={language}
                changeLanguage={switchLanguage}
            />
            <SetLanguage
                langName="Eng"
                stateLanguage={language}
                changeLanguage={switchLanguage}
            />
        </Stack>
    )
}

export default LangChange
