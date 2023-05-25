import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect, useMemo,
  useState
} from "react";
import {IProductCard} from "@components/ProductCard";
import {
  ViewTypeLayout,
  useViewType, sleep
} from "@modules/InfiniteProductsList";
import {fetchProductItemList} from "@modules/InfiniteProductsList/api/fetchProductItemList.ts";

type ProductsListContextType = {
  productItems: IProductCard[];
  viewType: ViewTypeLayout;

  setViewType: Dispatch<SetStateAction<ViewTypeLayout>>;
  refetchWithNewItems: () => Promise<void>;

  loading: boolean;
  isLimit: boolean;
  isError: boolean;
  isEmpty: boolean;
  refetchLoading: boolean;
}

export const ProductListContext = createContext<ProductsListContextType>({} as ProductsListContextType);

export const ProductsListProvider: FC<PropsWithChildren> = ({children}) => {
  ///////////////////
  // STATES
  ///////////////////
  const [productItems, setProductItems] = useState<IProductCard[]>([]);

  const [pageCount, setPageCount] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number | null>(null);

  // when preload fetch product items
  const [loading, setLoading] = useState(false);
  // when refetch product items
  const [refetchLoading ,setRefetchLoading] = useState(false);

  const isLimit = useMemo(() => !!(pageSize && pageCount >= pageSize), [pageCount]);

  const [isEmpty, setIsEmpty] = useState(false);

  const [isError, setIsError] = useState(false);

  const {viewType, setViewType} = useViewType();

  useEffect(() => {
    setLoading(true);
    fetchProductItemList(1)
      .then(data => {
        if (!Object.keys(data).length || !data.items.length) {
          setIsEmpty(true);
          throw Error('empty data');
        }
        setProductItems(data.items);
        setPageSize(data.pages);
        setPageCount(data.page);
      }, (reason) => {
        console.log(reason);
      })
      .catch(e => console.log(e))
      .finally(() => sleep(500).then(() => setLoading(false)));
  }, [])

  const refetchWithNewItems = async () => {
    if (isLimit) {
      return
    }
    try {
      if (isError) {
        await setIsError(false);
      }

      await setRefetchLoading(true);
      const response = await fetchProductItemList(pageCount);

      await setPageCount(value => value + 1);

      const {items} = await response;

      await setProductItems(prevItems => [...prevItems, ...items]);
      await setRefetchLoading(false);
    } catch (e) {
      console.log('refetch was failed. ', e);
      await setIsError(true);
    }
  }

  return (
    <ProductListContext.Provider value={{
      productItems,
      viewType,
      setViewType,
      loading,
      refetchWithNewItems,
      refetchLoading,
      isLimit,
      isError,
      isEmpty
    }}>
      {children}
    </ProductListContext.Provider>
  )
}

export const useProductsList = () => useContext(ProductListContext);

