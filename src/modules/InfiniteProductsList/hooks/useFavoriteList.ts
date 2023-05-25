import {favoriteItemListService, _localStorageFavoriteItemList} from "@modules/InfiniteProductsList";
import {useEffect, useState} from "react";

export const useFavoriteList = (itemId: string | undefined) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleIsFavorite = () => {
    if (!itemId) {
      return
    }
    favoriteItemListService(itemId);
    setIsFavorite(val => !val);
  }

  useEffect(() => {
    const favoriteList = JSON.parse(window.localStorage.getItem(_localStorageFavoriteItemList) ?? '[]');
    setIsFavorite(!!favoriteList?.includes(itemId));
  }, [itemId])

  return {toggleIsFavorite, isFavorite}
}