import styled from "styled-components";
import {device} from "theme";
import {ViewTypeLayout} from "@modules/InfiniteProductsList";

export const ProductList = styled('div')<{$viewType: ViewTypeLayout}>`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  margin-top: 92px;
  
  @media ${device.mobileS} {
    column-gap: 0;
  }
  
  @media (min-width: 550px) {
    grid-template-columns: repeat(
    ${({$viewType}) => ($viewType === 'horizontal' ? '1' : '2')},
    1fr);
  }
  
  @media ${device.tablet} {
    grid-template-columns: repeat(
      ${({$viewType}) => ($viewType === 'horizontal' ? '1' : '3')},
      1fr);
  }
  
  @media ${device.laptop} {
    margin-left: clamp(15px, 8%, 100px);
    margin-right: clamp(15px, 8%, 150px);
    grid-template-columns: repeat(
    ${({$viewType}) => ($viewType === 'horizontal' ? '2' : '4')},
    1fr);
  }
`;

export const EmptyProductList = styled('div')`
  width: 246px;
  height: calc(68px + 9px + 20px);
  position: absolute;
  //top: 50%;
  //transform: translateY(-50%);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`

export const EmptyProductListTitle = styled('h4')`
  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16.8px;
  line-height: 19px;
  color: ${props => props.theme.colors.green};
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
`

export const EmptyProductListDescription = styled('p')`
  font-weight: 400;
  font-size: 14.4px;
  line-height: 17px;
  font-style: normal;
  text-align: center;
  color: ${props => props.theme.colors.gray3};
  margin-top: 9px;
  margin-bottom: 0;
`