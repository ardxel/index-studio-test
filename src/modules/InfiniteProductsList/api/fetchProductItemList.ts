import {IProductsList} from "@modules/InfiniteProductsList/models";
import {ProductCardClient} from "@modules/InfiniteProductsList/api/ProductCardClient.ts";

export const fetchProductItemList = async (page = 1): Promise<IProductsList> => {
    const response = await ProductCardClient.get<IProductsList>(`?page=${page}`)
    const data = await response.data

    return data;
}