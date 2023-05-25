export interface IProductsList {
  items: import('@components/ProductCard').IProductCard[];

  /* total items */
  total: number,

  /* how many items in 1 page */
  size: number,

  /* page number */
  page: number,

  /* all pages */
  pages: number
}