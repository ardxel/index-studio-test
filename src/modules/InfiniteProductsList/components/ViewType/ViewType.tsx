import FourRectanglesIcon from '@assets/FourRectanglesIcon.svg';
import TwoRectanglesIcon from '@assets/TwoRectanglesIcon.svg';
import styled from "styled-components";
import {FC} from "react";
import {useProductsList} from "@modules/InfiniteProductsList/context";
import {Skeleton} from "@mui/material";

const Wrapper = styled.div`
  position: absolute;
  top: 35px;
  right: 35px;
  display: flex;
  column-gap: 16px;
  
  @media (min-width: 1300px) {
    right: -43px;
  }
`


const RectangleButton = styled('button')<{ $color: string }>`
  all: unset;
  cursor: pointer;
  &:hover {
    svg {
      stroke: ${props => props.theme.colors.gray2};
    }
  }
  & {
    svg {
      stroke: ${props => props.theme.colors[props.$color]};
    }
  }
`
export const ViewType: FC = () => {
  const {viewType, setViewType, isEmpty, loading} = useProductsList();

  const handleChangeViewType = () => {
    setViewType((type) => type === 'vertical' ? 'horizontal' : 'vertical');
  }

  if (isEmpty) {
    return null
  }

  if (loading) {
    return (
      <Wrapper>
        <Skeleton variant={"rounded"} width={78} height={34}/>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <RectangleButton onClick={handleChangeViewType} $color={viewType === "vertical" ? 'green' : 'gray1'}>
        <FourRectanglesIcon/>
      </RectangleButton>

      <RectangleButton onClick={handleChangeViewType} $color={viewType === "horizontal" ? 'green' : 'gray1'}>
        <TwoRectanglesIcon/>
      </RectangleButton>

    </Wrapper>
  )
}
