import React from 'react'
import {useSelector} from "react-redux";
import Box from "@mui/material/Box";
import {IconButton, Typography} from "@mui/material";
import {AddCircleRounded} from "@mui/icons-material";
const label ={
    'kid':'đồ cho bé',
    'pizza':'pizza',
    'appetizer':'khai vị',
    'vegetable':'đồ chay',
    'drink':'đồ uống',
    'dessert':'tráng miệng'
}
export const AddSlot = (props) =>{
    const slotId = props.slotId;
    const category = props.category;
    const openModal = props.openModal;
    return(
        <Box
            sx={{
                borderRadius: '12px',
                borderColor: '#EA6A12',
                borderStyle: 'dashed',
                borderWidth: '2px',
                width: '100%',
                alignItems: 'center',
                m: 3,
                p: 3,
                backgroundColor: 'rgba(252, 237, 227, 0.3)'
            }}
        >
            <IconButton
                sx={{
                }}
                onClick={() => {openModal(slotId)}}
            >
                <AddCircleRounded
                    sx={{
                        width: '50px',
                        height: '50px',
                        color: 'rgba(234, 106, 18, 0.7)',
                    }}
                />
            </IconButton>
            <Typography
                style={{
                    fontFamily: 'be Vietnam',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '22.75px',
                    color: 'black',
                    textAlign: 'center',
                }}
            >Chọn {label[category]}
            </Typography>
        </Box>
    )
}