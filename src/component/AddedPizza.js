import {useSelector} from "react-redux";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {Checkbox, Divider, IconButton, Typography} from "@mui/material";
import {KeyboardArrowLeftRounded, KeyboardArrowRightRounded, SwapHorizontalCircleRounded} from "@mui/icons-material";

export const AddedPizza = (props) =>{
    const slotId = props.slotId;
    const openModal = props.openModal;
    const productId = props.productId;
    const pizzaInfo = props.pizzaInfo;
    const handleChange = props.handleChange;
    const product = useSelector(state => state.pizzas.entities[productId]);
    return (
        <Box
            sx={{
                backgroundColor:'rgba(252, 237, 227, 0.3)',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                p:3,
                m: 3
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: {md: '90%', sm: '95%', xs: '95%'}
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
                <Stack spacing = {2} sx={{
                    marginLeft: {md: '50px', sm: 0, xs: 0},
                    width: {md: '70%', sm: '100%', xs: '100%'}
                }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%'
                        }}
                    >
                        <Typography variant="h6"
                                    sx={{
                                        fontFamily: 'Fairplay Display',
                                        fontWeight: 700,
                                        fontSize: {md: '35px', sm: '30px', xs: '25px'},
                                        lineHeight: '52px',
                                        color: '#07143B',
                                        textAlign: 'start',

                                    }}
                        >{product.title}
                        </Typography>
                        <Typography variant="h6"
                                    sx={{
                                        fontFamily: 'be Vietnam',
                                        fontWeight: 700,
                                        fontSize: {md: '25px', sm: '20px', xs: '20px'},
                                        lineHeight: '52px',
                                        color: '#07143B',
                                        textAlign: 'start',

                                    }}
                        >Giá: {pizzaInfo.price}VND
                        </Typography>
                    </Box>

                    <Divider variant='middle' sx={{width: '50%'}}/>
                    <Box
                        sx={{
                            display: 'flex',
                            width: {md: '70%', sm: '90%', xs: '90%'},
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Stack spacing={1} direction='row'
                               sx={{
                                   alignItems: 'center'
                               }}
                        >
                            <Typography variant="body1"
                                        sx={{
                                            fontFamily: 'be Vietnam',
                                            fontWeight: 400,
                                            fontSize: {md: '20px', sm: '15px', xs: '15px'},
                                            lineHeight: '22.75px',
                                            color: '#07143B',
                                            textAlign: 'start'
                                        }}
                            >Cỡ:
                            </Typography>
                            <IconButton
                                onClick = {() =>{
                                    const currentSize = pizzaInfo.size ? pizzaInfo.size : 0
                                    const newSize = currentSize > 0 ? currentSize - 1: 0
                                    const currentPrice = pizzaInfo.price;
                                    const newPrice = currentPrice - product.size[currentSize].type_price + product.size[newSize].type_price
                                    handleChange(slotId, {
                                        productId: productId,
                                        pizzaInfo:{
                                            ...pizzaInfo,
                                            size: newSize,
                                            price: newPrice
                                        }
                                    })
                                }}
                            >
                                <KeyboardArrowLeftRounded/>
                            </IconButton>
                            <Typography variant="subtitle1"
                                        sx={{
                                            fontFamily: 'Fairplay Display',
                                            fontWeight: 600,
                                            fontSize: {md: '20px', sm: '15px', xs: '15px'},
                                            lineHeight: '175%',
                                            color:'#07143B',
                                            textAlign: 'start'
                                        }}
                            >{product.size[pizzaInfo.size ? pizzaInfo.size: 0].type_detail}
                            </Typography>
                            <IconButton
                                onClick = {() =>{
                                    const currentSize = pizzaInfo.size ? pizzaInfo.size : 0
                                    const newSize = currentSize < product.size.length - 1 ? currentSize + 1: currentSize
                                    const currentPrice = pizzaInfo.price;
                                    const newPrice = currentPrice - product.size[currentSize].type_price + product.size[newSize].type_price
                                    handleChange(slotId, {
                                        productId: productId,
                                        pizzaInfo:{
                                            ...pizzaInfo,
                                            size: newSize,
                                            price: newPrice
                                        }
                                    })
                                }}
                            >
                                <KeyboardArrowRightRounded/>
                            </IconButton>
                        </Stack>
                        <Stack spacing={1} direction="row"

                               sx={{
                                   alignItems: 'center'
                               }}

                        >
                            <Typography variant="body1"
                                        sx={{
                                            fontFamily: 'be Vietnam',
                                            fontWeight: 400,
                                            fontSize: {md: '20px', sm: '15px', xs: '15px'},
                                            lineHeight: '22.75px',
                                            color: '#07143B',
                                            textAlign: 'start'
                                        }}
                            >Đế:
                            </Typography>
                            <IconButton
                                onClick = {() =>{
                                    const currentType = pizzaInfo.type ? pizzaInfo.type : 0
                                    const newType = 1 - currentType
                                    handleChange(slotId, {
                                        productId: productId,
                                        pizzaInfo:{
                                            ...pizzaInfo,
                                            type: newType,
                                        }
                                    })
                                }}
                            >
                                <KeyboardArrowLeftRounded/>
                            </IconButton>
                            <Typography variant="subtitle1"
                                        sx={{
                                            fontFamily: 'Fairplay Display',
                                            fontWeight: 600,
                                            fontSize: {md: '20px', sm: '15px', xs: '15px'},
                                            lineHeight: '175%',
                                            color:'#07143B',
                                            textAlign: 'start'
                                        }}
                            >{product.type[pizzaInfo.type ? pizzaInfo.type: 0].slice(0, 10)}
                            </Typography>
                            <IconButton
                                onClick = {() =>{
                                    const currentType = pizzaInfo.type ? pizzaInfo.type : 0
                                    const newType = 1 - currentType
                                    handleChange(slotId, {
                                        productId: productId,
                                        pizzaInfo:{
                                            ...pizzaInfo,
                                            type: newType,
                                        }
                                    })
                                }}
                            >
                                <KeyboardArrowRightRounded/>
                            </IconButton>
                        </Stack>
                    </Box>

                    <Typography variant="body1"
                                sx={{
                                    fontFamily: 'be Vietnam',
                                    fontWeight: 400,
                                    fontSize: {md: '20px', sm: '15px', xs: '15px'},
                                    lineHeight: '22.75px',
                                    color: '#07143B',
                                    textAlign: 'start'
                                }}
                    >Toppings:
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%'
                        }}
                    >
                        {
                            product.topping.map((top, index) =>
                                <Stack direction='row' spacing={3} sx={{width: {md: '70%', sm: '100%', xs: '100%'}, alignItems: 'center'}}>
                                    <Checkbox
                                        sx={{
                                            '&.Mui-checked': {
                                                color: '#EA6A12',
                                            },
                                        }}
                                        checked = {pizzaInfo.topping ? pizzaInfo.topping[index] : false}
                                        onChange={() =>{
                                            const currentTopping = pizzaInfo.topping ? pizzaInfo.topping : {}
                                            const newTopping = {
                                                ...currentTopping
                                            }
                                            newTopping[index] = currentTopping[index] === true? false : true
                                            const currentPrice = pizzaInfo.price;
                                            const newPrice = newTopping[index] ? currentPrice + top.topping_price : currentPrice - top.topping_price
                                            handleChange(slotId, {
                                                productId: productId,
                                                pizzaInfo:{
                                                    ...pizzaInfo,
                                                    topping: newTopping,
                                                    price: newPrice
                                                }
                                            })
                                        }}
                                    />
                                    <Typography variant="body1"
                                                sx={{
                                                    fontFamily: 'be Vietnam',
                                                    fontWeight: 700,
                                                    fontSize: '15px',
                                                    lineHeight: '22.75px',
                                                    color: '#07143B',
                                                    textAlign: 'start'
                                                }}
                                    >{top.topping_name} - {top.topping_price}đ
                                    </Typography>
                                </Stack>
                            )
                        }
                    </Box>
                </Stack>
            </Box>
            <IconButton
                onClick={() =>{
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