import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { lazy } from "react";

// RestaurantList is JSON Data for displaying cards
const Instamart=lazy(()=>import("./components/Instamart"));

// const BurgerKing={
//     name:"Burger King",
//     image:"https://img.etimg.com/thumb/width-640,height-480,imgsize-731189,resizemode-75,msid-72863458/markets/stocks/news/burger-king-india-could-be-a-better-treat-than-mcdonalds-franchisee/burger-thnkstck.jpg", alt:"Burger King",
//     cusines:["Burgers","American"],
//     ratings:"4.2"
// }




const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
          <Outlet/>
            <Footer />
        </React.Fragment>
    )

}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/About",
                element: <About />,
                children:[{
                    path:"Profile",   //localhost:1234/about/profile
                    element:<Profile/>
                }]
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
               element:<RestaurantMenu/>
            },
            {
                path: "/instamart",
               element:<Instamart/>
            },
            {
                path: "/login",
                element: <Login />,
              },
        ]
    }
    
])


const root = ReactDOM.createRoot(document.getElementById('root'));

//Async defer
// root.render(<RouterProvider router={<appRouter/>}/>);
root.render(<RouterProvider router={appRouter} />)
