import styled from "styled-components";
import {Button, CircularProgress} from "@mui/material";

export const ButtonWrapper = styled("div")<{$bottomSpace?: boolean}>`
  margin-top: calc((94px + 16px)/ 2);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.$bottomSpace && '519px'};
`

export const PaginationButtonStyled = styled(Button)`
  && {
    border-color: #FFFFFF;
    color: ${props => props.theme.colors.green};
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    border-radius: 45px;
    
    &:hover {
      border-color: #FFFFFF;
    }
  }
`;

export const CircularProgressStyled = styled(CircularProgress)`
  && {
    color: #ABCFD0;
    margin: 79px auto 450px;
  }
`

export const RefetchErrorMessage = styled('div')`
  margin-top: 38px;
  margin-bottom: 10px;
`

export const ErrorTitle = styled('h4')`
  font-weight: 400;
  font-size: 14.4px;
  line-height: 17px;
  text-align: center;
  color: ${props => props.theme.colors.gray3}
`