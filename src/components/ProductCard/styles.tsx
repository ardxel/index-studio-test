import styled from "styled-components";
import {ViewTypeLayout} from "@modules/InfiniteProductsList";
import {IconButton} from "@mui/material";
import {Link} from "react-router-dom";

const containerSize = {
  vertical: {
    width: "224px",
    minWidth: '100px',
    maxWidth: '224px',
    height: "364px",
    flexDirection: 'column'
  },
  horizontal: {
    width: '472px',
    minWidth: '100px',
    maxWidth: '472px',
    height: '134px',
    flexDirection: 'row'
  }
}

const imgSize = {
  vertical: {
    width: '100%',
    height: '260px',
    borderRadius: '15px 15px 0 0'
  },
  horizontal: {
    width: '156px',
    height: '100%',
    borderRadius: '15px 0 0 15px'
  }
}

const infoSize = {
  vertical: {
    width: 'calc(100% - 30px)',
    height: '104px'
  },
  horizontal: {
    width: 'calc(100% - 156px - 24px)',
    height: 'calc(134px - 30px)'
  }
}
const shadow = {
  defaultShadow: '0px 0px 16px rgba(0, 0, 0, 0.08)',
  hoverShadow: '0px 0px 11px rgba(0, 0, 0, 0.31)'
}

const borderRadius = {
  vertical: '12px 12px 0 0',
  horizontal: '12px 0 0 12px'
}
export const ProductCardLayout = {
  Container: styled(Link)<{ $viewType: ViewTypeLayout }>`
    ${props => ({...containerSize[props.$viewType]})}
    box-shadow: ${shadow.defaultShadow};
    transition: box-shadow 300ms ease-out;
    &:hover {
      box-shadow: ${shadow.hoverShadow};
    }
    filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.08));
    margin: 0 auto;
    display: flex;
    border-radius: 12px;
    @media (max-width: 500px) {
      width: 100vw;
    }
  `,

  SeenMark: styled('span')`
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    vertical-align: middle;
    line-height: 24px;
    margin: 11px auto 0;
    z-index: 40;
    background: #FFFFFFE5;
    border-radius: 8px;
    width: 94px;
    height: 24px;
    font-weight: 400;
    font-size: 12px;
    color: ${props => props.theme.colors.black2};
  `,

  Img: styled('div')<{ $viewType: ViewTypeLayout }>`
    ${props => ({...imgSize[props.$viewType]})} // TODO
    position: relative;
    z-index: 20;
    
    && {
      & .MuiSkeleton-rounded {
        border-radius: ${props => borderRadius[props.$viewType]}
      }
      
      & .MuiSkeleton-rounded.product-card-swiper-loading {
        width: 56px;
        height: 8px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto 9px;
        border-radius: 3px;
        background: ${props => props.theme.colors.gray6};
      }
    }

    & .bg-image-plug {
      background: ${props => props.theme.colors.gray4};
      width: 100%;
      height: 100%;
      border-radius: ${props => borderRadius[props.$viewType]}
    }

    & .swiper-pagination-bullet.swiper-pagination-bullet-active {
      background: ${props => props.theme.colors.green};
      border-radius: 50%;
    }

    & .swiper-pagination-bullet {
      background: ${props => props.theme.colors.gray1};
      border-radius: 50%;
    }

    & .swiper {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: ${props => borderRadius[props.$viewType]}
        }
      }
    }
  `,
  Info: styled('div')<{ $viewType: ViewTypeLayout }>`
    position: relative;
    ${props => ({...infoSize[props.$viewType]})}
    margin: 15px 12px;
  `,

  Price: styled('span')`
    position: absolute;
    left: 0;
    top: -6px;
    font-size: 22px;
    font-weight: 700;
    margin-block: 0;
    line-height: 25px;
    color: ${props => props.theme.colors.black2}
  `,
  Favorite: styled(IconButton)<{ $iconColor?: string, $viewType: ViewTypeLayout }>`
    && {
      position: absolute;
      ${props => props.$viewType === 'vertical' 
              ? ({top: '-6px', right: '-8px'})
              : ({top: '-5px', right: '0px'})}
      padding: 0;
      color: ${props => props.$iconColor ?? props.theme.colors.gray1};
      transition: transform 300ms ease-in-out, color 300ms ease-in-out;
      &:hover {
        transform: scale(1.1);
        color: ${props => props.theme.colors.gray2}
      }
    }
  `,
  Title: styled('p')`
    position: absolute;
    top: 20px;
    left: 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    margin-block-end: 0;
    font-style: normal;
    color: ${props => props.theme.colors.black2}
  `,
  Address: styled('span')`
    position: absolute;
    bottom: 0;
    left: 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: ${props => props.theme.colors.gray3}
  `,
  CreatedAt: styled('span')`
    position: absolute;
    bottom: 0;
    right: 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: ${props => props.theme.colors.gray3}
  `
}