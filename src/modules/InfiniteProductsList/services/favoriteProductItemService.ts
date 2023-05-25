
export const _localStorageFavoriteItemList = 'infinite_product_list_favorite_items';

export const favoriteItemListService = (itemId: string) => {

  /* get item list from localStorage */
  let favoriteItemList: string[] = _get();

  if (!favoriteItemList.length) {
    _set([itemId]);
    return;
  }

  const isFavorite = favoriteItemList.find(item => item === itemId);

  /* if itemId is already in the local storage, then delete it, if not, then add it */
  _set(isFavorite
      ? favoriteItemList.filter(item => item !== itemId)
      : [...favoriteItemList, itemId]
  )

  function _get() {
    const list = JSON.parse(window.localStorage.getItem(_localStorageFavoriteItemList) ?? '[]');
    console.log(list);
    return list;
  }

  function _set(item: string[]) {
    window.localStorage.setItem(_localStorageFavoriteItemList, JSON.stringify(item));
  }
}