import {Button, useScrollTrigger, Zoom} from "@mui/material";
import styled from "styled-components";
import {ExpandLess} from "@mui/icons-material";

const ScrollTopButton = styled(Button)`

  box-shadow: 0px 0px 16px 0px #00000014;
  
  && {
    position: fixed;
    bottom: 35px;
    right: 43px;
    z-index: 100;
    background: #FFFFFF;
    padding: 17px 19px;
    display: flex;
    border-radius: 30px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: ${props => props.theme.colors.gray3};
    border-color: #FFFFFF;
    column-gap: 5.5px;
    svg {
      font-size: 30px;
    }
    
    &:hover {
      border-color: #FFFFFF;
      background: none;
    }
     @media (min-width: 1000px) {
      right: 58px;
    }
  }
`


export const ScrollToTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  })

  const handleScrollToTop = () => document.documentElement.scrollTo({top: 0, behavior: 'smooth'});

  return (
    <Zoom in={trigger}>
      <ScrollTopButton variant='outlined' startIcon={<ExpandLess/>} onClick={handleScrollToTop}>
        Вверх
      </ScrollTopButton>
    </Zoom>
  )
}