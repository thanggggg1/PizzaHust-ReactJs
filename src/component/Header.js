import React, {memo} from "react";
import Box from "@mui/material/Box";
import {styled} from '@mui/material/styles';
import {IMG_CART_HEADER, IMG_LOGO} from "../assets";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router';

export const Header = memo(function Header() {
    const navigate = useNavigate();
    return (
        <Container>
            <LogoImage src={IMG_LOGO}/>
            <Right direction={'row'} spacing={4}>
                <ButtonHeader
                    onClick={()=>{ navigate('/')}}
                    variant="text">Trang chủ</ButtonHeader>
                <ButtonHeader
                    onClick={()=>{
                        navigate('/menu/')
                    }}
                    variant="text"
                >Thực đơn</ButtonHeader>
                <ButtonHeader
                    onClick={()=>{
                        navigate('/combos/')
                    }}
                    variant="text">Khuyến mãi </ButtonHeader>
                <ButtonHeader
                    onClick={()=>{
                        navigate('/order/')
                    }}
                    variant="text">Đơn hàng</ButtonHeader>
                <CartImage
                    onClick={()=>{
                        navigate('/cart/')
                    }}
                    src={IMG_CART_HEADER}/>
            </Right>
        </Container>
    )
})
const Container = styled(Box)`
  background-color: #FFFBFB;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  z-index:1;
  justify-content: space-between;
`
const LogoImage = styled('img')({
    width: 180,
    height: 40
})


const CartImage = styled('img')({
    width: 32,
    height: 32
})


const ButtonHeader = styled(Button)({
    color: '#333',
    fontSize: 12,
    fontWeight:"bolder",
    '&:hover': {
        color: '#EC393E',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        color: '#EC393E',
    }
})
const Right = styled(Stack)`

`
