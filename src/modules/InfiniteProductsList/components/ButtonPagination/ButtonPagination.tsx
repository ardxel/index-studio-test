import {
  ButtonWrapper,
  CircularProgressStyled, ErrorTitle,
  PaginationButtonStyled,
  RefetchErrorMessage,
  useProductsList
} from "@modules/InfiniteProductsList";
import {Skeleton} from "@mui/material";

export const ButtonPagination = () => {
  const {loading, refetchWithNewItems, refetchLoading, isLimit, isError, isEmpty} = useProductsList();

  if (loading) {
    return <Skeleton sx={{margin: '39px auto'}} width={125} height={32} variant='rounded'/>
  }

  if (isLimit || isEmpty) {
    return null
  }

  if (refetchLoading) {
    return <CircularProgressStyled/>
  }

  if (isError) {
    return (
      <ButtonWrapper $bottomSpace>
        <RefetchErrorMessage>
          <ErrorTitle>Ошибка при загрузке</ErrorTitle>
        </RefetchErrorMessage>
        <PaginationButtonStyled
          onClick={refetchWithNewItems}
          variant='outlined'>
          Повторить попытку
        </PaginationButtonStyled>
      </ButtonWrapper>
    )
  }

  return (
    <ButtonWrapper>
      <PaginationButtonStyled
        onClick={refetchWithNewItems}
        variant='outlined'>
        Показать еще
      </PaginationButtonStyled>
    </ButtonWrapper>
  )
}