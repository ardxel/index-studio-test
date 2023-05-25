import {ViewTypeLayout} from "@modules/InfiniteProductsList";

export const localStorageViewTypeKey = 'infinite_product_list_view_type';

export const viewTypeService = (viewType?: ViewTypeLayout) => {
  window.localStorage.setItem(localStorageViewTypeKey, viewType ?? 'vertical');
}