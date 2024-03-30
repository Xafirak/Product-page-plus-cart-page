import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'

interface IAddRemoveButtonsProps {
    quantity: number
    increase: () => void
    decrease: () => void
}

const AddRemoveButtons: React.FC<IAddRemoveButtonsProps> = ({
    increase,
    decrease,
    quantity,
}) => {
    return (
        <Stack
            margin={1}
            justifyContent="center"
            direction="row"
            alignItems="center"
        >
            <IconButton
                style={{
                    width: '30px',
                    height: '30px',
                    color: 'white',
                    backgroundColor: quantity === 1 ? 'lightgray' : '#FFCE7F',
                }}
                onClick={(e) => decrease()}
                disabled={quantity === 1}
            >
                <RemoveIcon />
            </IconButton>
            <Button
                style={{
                    color: 'black',
                    fontFamily: 'Montserrat',
                    fontWeight: '600',
                    fontSize: '17px',
                }}
                disabled
            >
                {quantity}
            </Button>
            <IconButton
                style={{
                    width: '30px',
                    height: '30px',
                    color: 'white',
                    backgroundColor: '#FFCE7F',
                }}
                onClick={(e) => increase()}
            >
                <AddIcon />
            </IconButton>
        </Stack>
    )
}

export default AddRemoveButtons
