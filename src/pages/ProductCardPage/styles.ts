import styled from "styled-components";
import {Button, IconButton} from "@mui/material";

export const ProductCardPageLayout = {
  Wrapper: styled('main')`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 45px;
    margin-top: 130px;
    box-shadow: 0px 0px 16px 0px #00000014;
    display: flex;
    border-radius: 13px;
    flex-direction: column;
    row-gap: 30px;
  `,

  Desc: styled('div')`
    width: 100%;
    height: 40%;
    position: relative;
    h1 {
      margin-top: 0;
    }
    && {
      .MuiSkeleton-pulse. {
        transform: none;
      }
      
      .MuiSkeleton-pulse.product-card-page-title-skeleton {
        width: 33vw;
        max-width: 280px;
        height: 40px;
      }
      .MuiSkeleton-pulse.product-card-page-seen-skeleton {
        width: 10vw;
        max-width: 140px;
        height: 30px;
      }
      .MuiSkeleton-pulse.product-card-page-price-skeleton {
        width: 20vw;
        max-width: 200px;
        height: 30px;
      }
      .MuiSkeleton-pulse.product-card-page-about-skeleton {
        width: 100%;
        max-width: 100%;
        height: 100px;
      }
    }
  `,
  Footer: styled('div')`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
    && {
      .MuiSkeleton-pulse.product-card-page-address-skeleton,
      .MuiSkeleton-pulse.product-card-page-createdAt-skeleton{
        width: 10vw;
        max-width: 100px;
        height: 40px;
      }
    }
    span {
      color: ${props => props.theme.colors.gray3}
    }
  `,
  Favorite: styled(IconButton)<{ $iconColor?: string }>`
    && {
      position: absolute;
      right: 0;
      top: 0;
      padding: 0;
      width: 40px;
      height: 40px;
      svg {
        width: 100%;
        height: 100%;
      }
      color: ${props => props.$iconColor ?? props.theme.colors.gray1};
      transition: transform 300ms ease-in-out, color 300ms ease-in-out;
      &:hover {
        transform: scale(1.1);
        color: ${props => props.theme.colors.gray2}
      }
    }
  `,

  Img: styled('div')<{$useSkeleton?: boolean}>`
    position: relative;
    width: 100%;
    min-height: 150px;
    height: 40vw;
    max-height: 440px;

    ${props => props.$useSkeleton && ({display: 'flex', columnGap: '25px'})}
    
    .img-loading-bg {
      background: ${props => props.theme.colors.gray4};
      width: 100%;
      height: 100%;
      border-radius: 13px;
    }
    
    && {
      .MuiSkeleton-pulse.product-card-page-skeleton {
        width: 33%;
        height: 100%;
        transform: none;
      }
    }
    
    & .swiper {
      width: 100%;
      height: 100%;

      & .swiper-pagination-bullet {
        width: 22px;
        height: 22px;
        font-size: 14px;
        line-height: 22px;
        background: ${props => props.theme.colors.gray3};
        color ${props => props.theme.colors.gray1};
      }

      & .swiper-pagination-bullet-active {
        background: ${props => props.theme.colors.green};
      }

      & .swiper-slide {
        width: 33% !important;
        height: 100%;
        position: relative;

      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 13px;
      }
    }
  `,
  GoBack: styled(Button)`
    box-shadow: 0px 0px 16px 0px #00000014;

    && {
      position: absolute;
      top: 35px;
      left: 43px;
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

    }
  `
}