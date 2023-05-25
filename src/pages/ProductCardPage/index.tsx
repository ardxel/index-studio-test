import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IProductCard} from "@components/ProductCard";
import {
  fetchProductItem,
  fetchRandomImage,
  formatDate,
  formatPrice,
  useFavoriteList
} from "@modules/InfiniteProductsList";
import {ProductCardPageLayout} from "./styles.ts";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import "swiper/css"
import "swiper/css/pagination";
import {PaginationOptions} from "swiper/types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useTheme} from "styled-components";
import {ChevronLeft} from "@mui/icons-material";
import {Skeleton} from "@mui/material";

export const ProductCardPage = () => {
  const [info, setInfo] = useState<IProductCard | null>(null);
  const [images, setImages] = useState<string[] | null>(null);

  const [infoLoading, setInfoLoading] = useState(false);
  const [imagesLoading, setImagesLoading] = useState(false);
  const theme = useTheme();
  const {id} = useParams();
  const navigate = useNavigate();

  const {toggleIsFavorite, isFavorite} = useFavoriteList(id);

  const favoriteColor = isFavorite ? theme?.colors.green : theme?.colors.gray1;

  useEffect(() => {
    /* if no id param, then go back to previous page */
    if (!id) {
      navigate(-1);
    } else {

      setInfoLoading(true);
      setImagesLoading(true);

      Promise.all([
        /* product item */
        fetchProductItem(id),
        /* 16 random image promises */
        new Array(16).fill(fetchRandomImage).map(fn => fn())
      ]).then(([productItem, randomImages]) => {

        setInfo(productItem);
        setInfoLoading(false);

        Promise.all(randomImages).then((imgs) => {
          setImages(imgs as string[]);
          setImagesLoading(false);
        })
      }).finally(() => {
          infoLoading && setInfoLoading(false);
          imagesLoading && setImagesLoading(false);
      })
    }
  }, [id])

  const navigateBack = () => navigate(-1);
  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: (index, className) => `<span class=" ${className} ">${index + 1}</span>`
  }

  if (infoLoading) {
    return (
      <>
        <ProductCardPageLayout.GoBack startIcon={<ChevronLeft/>} onClick={navigateBack}>
          Назад
        </ProductCardPageLayout.GoBack>
        <ProductCardPageLayout.Wrapper>
          <ProductCardPageLayout.Img $useSkeleton>
            {new Array(3).fill('none').map((_, i) => {
              return <Skeleton key={i} className='product-card-page-skeleton'/>
            })}
          </ProductCardPageLayout.Img>
          <ProductCardPageLayout.Desc>
            <ProductCardPageLayout.Favorite
              $iconColor={favoriteColor}>
              <Skeleton width={40} height={40}/>
            </ProductCardPageLayout.Favorite>
            <Skeleton className='product-card-page-title-skeleton'/>
            <Skeleton className='product-card-page-seen-skeleton'/>
            <Skeleton className='product-card-page-price-skeleton'/>
            <Skeleton className='product-card-page-about-skeleton'/>
            <ProductCardPageLayout.Footer>
              <Skeleton className='product-card-page-address-skeleton'/>
              <Skeleton className='product-card-page-createdAt-skeleton'/>
            </ProductCardPageLayout.Footer>
          </ProductCardPageLayout.Desc>
        </ProductCardPageLayout.Wrapper>
      </>
    )
  }

  return (
    <>
      <ProductCardPageLayout.GoBack startIcon={<ChevronLeft/>} onClick={navigateBack}>
        Назад
      </ProductCardPageLayout.GoBack>
      <ProductCardPageLayout.Wrapper>
        <ProductCardPageLayout.Img>
          {imagesLoading
            ? <div className='img-loading-bg'></div>
            : (<Swiper
              modules={[Pagination]}
              pagination={pagination}
              slidesPerView={5}
              spaceBetween={25}
            >
              {images?.map((img, i) => <SwiperSlide key={i}><img src={img}/></SwiperSlide>)}
            </Swiper>
          )}
        </ProductCardPageLayout.Img>
        <ProductCardPageLayout.Desc>
          <ProductCardPageLayout.Favorite
            $iconColor={favoriteColor} onClick={toggleIsFavorite}
            disableTouchRipple disableRipple>
            <FavoriteIcon/>
          </ProductCardPageLayout.Favorite>
          <h1>{info?.title}</h1>
          <span>{info?.seen && 'Вы уже были здесь'}</span>
          <h3>{info && formatPrice.format(info?.price)}</h3>
          <p>{info?.about}</p>

          <ProductCardPageLayout.Footer>
            <span>{info?.address}</span>
            <span>{info && formatDate(info.createdAt)}</span>
          </ProductCardPageLayout.Footer>
        </ProductCardPageLayout.Desc>
      </ProductCardPageLayout.Wrapper>
    </>
  )
}