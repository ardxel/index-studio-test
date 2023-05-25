import {FC, useEffect, useState} from "react";
import {IProductCard} from "./model.ts";
import {
  useProductsList,
  useFavoriteList,
  sleep,
  fetchRandomImage,
  formatDate,
  formatPrice
} from "@modules/InfiniteProductsList";
import {ProductCardLayout} from './styles.tsx';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useTheme} from "styled-components";
import {Skeleton} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import "swiper/css"
import "swiper/css/pagination";

type ProductCardResponse = {
  message: string;
  status: string;
}

type ProductCardProps = IProductCard & {
  showSkeleton?: boolean;
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  const [imagesLoading, setImagesLoading] = useState(false);
  const [images, setImages] = useState<string[]>([])
  const {viewType, loading} = useProductsList();
  const {toggleIsFavorite, isFavorite} = useFavoriteList(props?.id);
  const theme = useTheme();

  const isVertical = viewType === 'vertical';
  const favoriteColor = isFavorite ? theme?.colors.green : theme?.colors.gray1;
  const showImage = !!(!imagesLoading && !loading && images.length);

  useEffect(() => {

    const multiFetch = async (promise: () => Promise<any>, size: number) => {
      const promises = [];
      for (let i = 0; i < size; i++) {
        promises.push(promise());
      }

      return Promise.all(promises).then(data => data);
    }

    setImagesLoading(true);
    multiFetch(fetchRandomImage<ProductCardResponse>, 4)
      .then(images => setImages(images))
      .finally(() => sleep(0).then(() => setImagesLoading(false)));

  }, [])

  /* SKELETON */
  if (loading || props.showSkeleton) {
    return (
      <ProductCardLayout.Container $viewType={viewType} to={'/'}>
        <ProductCardLayout.Img $viewType={viewType}>
          <Skeleton width={isVertical ? 224 : 156} height={isVertical ? 260 : 134} variant='rounded'/>
          <Skeleton width={56} height={8} variant='rounded' className='product-card-swiper-loading'/>
        </ProductCardLayout.Img>
        <ProductCardLayout.Info $viewType={viewType}>

          <ProductCardLayout.Price>
            <Skeleton width={isVertical ? 166 : 256} height={25} variant='rounded'/>
          </ProductCardLayout.Price>

          <ProductCardLayout.Favorite $viewType={viewType}>
            <Skeleton width={25} height={25} variant='rounded'/>
          </ProductCardLayout.Favorite>

          <ProductCardLayout.Title>
            <>
              <Skeleton width={isVertical ? 200 : 292} height={16} variant='rounded'/>
              {!isVertical && <Skeleton width={116} height={26}/>}
            </>
          </ProductCardLayout.Title>

          <ProductCardLayout.Address>
            <Skeleton width={isVertical ? 200 : 177} height={14} variant='rounded'/>
          </ProductCardLayout.Address>

          <ProductCardLayout.CreatedAt>
            {!isVertical ? <Skeleton width={107} height={14} variant='rounded'/> : ''}
          </ProductCardLayout.CreatedAt>
        </ProductCardLayout.Info>
      </ProductCardLayout.Container>
    )
  }

  return (
    <ProductCardLayout.Container $viewType={viewType} to={`/${props.id}`}>
      <ProductCardLayout.Img $viewType={viewType}>
        {props.seen && <ProductCardLayout.SeenMark>
          Просмотрено
        </ProductCardLayout.SeenMark>}
        {showImage
          ? (<Swiper pagination={true} modules={[Pagination]}>
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image}/>
              </SwiperSlide>
            ))}
          </Swiper>)
          : <div className='bg-image-plug'></div>}
      </ProductCardLayout.Img>
      <ProductCardLayout.Info $viewType={viewType}>

        <ProductCardLayout.Price>
          {formatPrice.format(props ? props.price : 0.000)}
        </ProductCardLayout.Price>

        <ProductCardLayout.Favorite
          $viewType={viewType}
          $iconColor={favoriteColor} onClick={toggleIsFavorite}
          disableTouchRipple disableRipple>
          <FavoriteIcon/>
        </ProductCardLayout.Favorite>

        <ProductCardLayout.Title>
          {props ? props.title : 'Название товарной позиции'}
        </ProductCardLayout.Title>

        <ProductCardLayout.Address>
          {props ? props.address : 'Город'}
        </ProductCardLayout.Address>

        <ProductCardLayout.CreatedAt>
          {props ? formatDate(props.createdAt) : '00.00.00, 00.00'}
        </ProductCardLayout.CreatedAt>
      </ProductCardLayout.Info>
    </ProductCardLayout.Container>
  )
}
