import {createBrowserRouter} from "react-router-dom";
import {MainPage, ProductCardPage} from "pages";

const AppRouter = createBrowserRouter([
  {
    element: <MainPage/>,
    path: '/',
    index: true
  },
  {
    element: <ProductCardPage/>,
    path: '/:id'
  }
])

export default AppRouter;