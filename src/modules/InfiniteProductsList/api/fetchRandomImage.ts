import axios from "axios";
import {IMAGES_URL} from "@modules/InfiniteProductsList";

export const fetchRandomImage = async <T>(): Promise<T | string> => {
  const response = await axios.get(IMAGES_URL);

  const data = await response.data;

  if (data.status === 'success') {
    return data.message;
  } else {
    return 'https://shorturl.at/dqAOV'
  }
}