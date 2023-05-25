import axios from "axios";

export const ProductCardClient = axios.create({
  baseURL: 'https://testguru.ru/frontend-test/api/v1/items/',
  timeout: 1000,
  headers: {
    Accept: 'application/json'
  }
})