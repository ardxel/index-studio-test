import {InfiniteProductsList, ViewType, ProductsListProvider, ButtonPagination} from '@modules/InfiniteProductsList'
import styled from "styled-components";
import {ScrollToTop} from "@components/ScrollToTop";

const Main = styled('main')`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-bottom: calc(94px - 32px);
  display: flex;
  flex-direction: column;
`

export const MainPage = () => {
  return (
    <ProductsListProvider>
      <Main>
        <ViewType/>
        <ScrollToTop/>
        <InfiniteProductsList/>
        <ButtonPagination/>
      </Main>
    </ProductsListProvider>
  )
}