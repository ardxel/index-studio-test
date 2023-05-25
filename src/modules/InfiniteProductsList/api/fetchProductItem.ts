import {ProductCardClient} from "@modules/InfiniteProductsList";
import {IProductCard} from "@components/ProductCard";

export const fetchProductItem = async (id: string): Promise<IProductCard> => {

  const response = await ProductCardClient.get<IProductCard>(id);

  const data = response.data

  return data;
}