import {useEffect, useState} from "react";
import {ViewTypeLayout, localStorageViewTypeKey} from "@modules/InfiniteProductsList";

export const useViewType = () => {

  const initialValue = () => window.localStorage.getItem(localStorageViewTypeKey) ?? 'vertical';

  const [viewType, setViewType] = useState<ViewTypeLayout>(initialValue() as ViewTypeLayout);

  // when the state changes, pin the value to local storage
  useEffect(() => {
    window.localStorage.setItem(localStorageViewTypeKey, viewType);
  }, [viewType])

  return {viewType, setViewType};
}