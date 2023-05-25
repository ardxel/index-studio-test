/* format number to number + Rub currency at the end */
export const formatPrice = new Intl.NumberFormat('ru-Ru', {
  style: 'currency',
  currency: 'RUB'
})