import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
// const appRouter=createBrowserRouter([
//   {
//     path:"/",
//     element:<App />,
//     children:[
//       {
//         path:"/",
//         element:<Home/>
//       },
//       {
//         path:"/login",
//         element:<Login/>
//       },
//       {
//         path:"/restaurant",
//         element:<RestaurantMenu />
//       },
//         ],
//   },

// ])
root.render(
  // <RouterProvider router={appRouter}/>
  <>
    <Provider store={appStore}>
      
        <App />

    </Provider>
  </>
);

reportWebVitals();
