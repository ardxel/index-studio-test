import {ProductCard, offlineTest} from "@components/ProductCard";
import {EmptyProductList, EmptyProductListDescription, EmptyProductListTitle, ProductList} from './styles.tsx';
import {useProductsList} from "@modules/InfiniteProductsList/context";
import {empty_description} from "@modules/InfiniteProductsList/components/InfiniteProductsList/empty-description.ts";

export const InfiniteProductsList = () => {
  const {productItems, viewType, loading, isEmpty} = useProductsList();

  if (loading) {
    // create 20 product card skeletons
    return (
      <ProductList $viewType={viewType}>
        {new Array(20)
          .fill(offlineTest)
          .map((item, index) => <ProductCard key={index} showSkeleton {...item} />)}
      </ProductList>
    )
  }

  if (isEmpty && !loading) {
    const {title, desc} = empty_description;
    return (
      <EmptyProductList>
        <EmptyProductListTitle>{title}</EmptyProductListTitle>
        <EmptyProductListDescription>{desc}</EmptyProductListDescription>
      </EmptyProductList>
    )
  }

  return (
    <>
      <ProductList $viewType={viewType}>
        {!loading && productItems.map((item, index) => (<ProductCard key={index} {...item}/>))}
      </ProductList>
    </>
  )

}
