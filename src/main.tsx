import ReactDOM from 'react-dom/client'
import AppRouter from "./AppRouter.tsx";
import {RouterProvider} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {theme, GlobalStyle} from "./theme";

const Root = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <RouterProvider router={AppRouter}/>
    </ThemeProvider>
  </>
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Root/>
)
