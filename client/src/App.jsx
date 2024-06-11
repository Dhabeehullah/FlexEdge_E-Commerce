import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import SingleProduct from './components/SingleProduct'
import { createBrowserRouter,Outlet,ScrollRestoration,RouterProvider } from 'react-router-dom'
import SupplementsForAllProducts from './pages/SupplementsForAllProducts'
import GymAccessoriesAllProducts from './pages/GymAccessoriesAllProducts'
import GymOutfitsAllProucts from './pages/GymOutfitsAllProducts'
import Login from './pages/Login'
import OurStory from './pages/OurStory'
import Authencity from './pages/Authencity'
import Contact from './pages/Contact'
import {NextUIProvider} from "@nextui-org/system";



function App() {
  
  const Layout= () => {
    return <div>
              <Header />
              <ScrollRestoration />
              <Outlet />
              <Footer />
            </div>
  }
  const router = createBrowserRouter([{
    path:"/",
    basename: "/FlexEdge_E-Commerce/",
    element:<Layout />,

    children:[
      {
        path:"/FlexEdge_E-Commerce/",
        element:<Home />
      },
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"/supplements",
        element:<SupplementsForAllProducts />,
      },
      {
        path:"/gymaccessories",
        element:<GymAccessoriesAllProducts />
      },
      {
        path:"/gymoutfits",
        element:<GymOutfitsAllProucts />
      },
      {
        path:"/product/:id",
        element:<SingleProduct />
      },
      {
        path:"/cart",
        element:<Cart />,
      },
      {
        path:"/login",
        element:<Login />,
      },
      {
        path:"/ourstory",
        element:<OurStory />
      },
      {
        path:"/authencity",
        element:<Authencity />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/FlexEdge/contact",
        element:<Contact />
      },
      {
        path:"/FlexEdge/gymaccessories",
        element:<GymAccessoriesAllProducts />
      },
      {
        path:"/FlexEdge/supplements",
        element:<SupplementsForAllProducts />
      },
  ]
  }]);

  return (
    <div className='font-bodyFont'>
        <RouterProvider router={router} />     
    </div>
  );
}

export default App
