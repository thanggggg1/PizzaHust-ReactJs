import React from 'react'
import {useSelector} from "react-redux";
import Box from "@mui/material/Box";
import {Divider, IconButton, Typography} from "@mui/material";
import {SwapHorizontalCircleRounded} from "@mui/icons-material";
import Stack from "@mui/material/Stack";
export const AddedExtra = (props) => {
    const menu = {
        'pizza': useSelector(state => state.pizzas),
        'kid': useSelector(state => state.kids),
        'drink': useSelector(state => state.drinks),
        'appetizer': useSelector(state => state.appetizers),
        'vegetable': useSelector(state => state.vegetables),
        'dessert': useSelector(state => state.desserts),
    }
    const category = props.category;
    const slotId = props.slotId;
    const openModal = props.openModal;
    const productId = props.productId;
    const product = menu[category].entities[productId];
    return (
        <Box
            sx={{
                backgroundColor: 'rgba(252, 237, 227, 0.3)',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                p: 3,
                m: 3
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}
            >
                <Box
                    sx={{
                        display: {md: 'block', sm: 'none', xs: 'none'}
                    }}
                >
                    <img
                        src={product.image_url}
                        alt={product.title}
                        style={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            objectFit: 'cover'
                        }}
                    />
                </Box>
                <Stack spacing={2} sx={{
                    marginLeft: {md: '50px', sm: 0, xs: 0}
                }}>
                    <Typography variant="h6"
                                sx={{
                                    fontFamily: 'Fairplay Display',
                                    fontWeight: 700,
                                    fontSize: {md: '35px', sm: '25px', xs: '20px'},
                                    lineHeight: '52px',
                                    color: '#07143B',
                                    textAlign: 'start',

                                }}
                    >{product.title}
                    </Typography>
                    <Divider variant='middle' sx={{width: '50%'}}/>
                    <Typography variant="h6"
                                sx={{
                                    fontFamily: 'be Vietnam',
                                    fontWeight: 700,
                                    fontSize: {md: '25px', sm: '20px', xs: '20px'},
                                    lineHeight: '52px',
                                    color: '#07143B',
                                    textAlign: 'start',

                                }}
                    >{product.price}đ
                    </Typography>
                </Stack>
            </Box>
            <IconButton
                onClick={() => {
                    openModal(slotId)
                }}
            >
                <SwapHorizontalCircleRounded
                    sx={{
                        width: '50px',
                        height: '50px',
                        color: 'rgba(234, 106, 18, 0.7)',
                    }}
                />
            </IconButton>
        </Box>
    )
}