import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import Register from "./Pages/Register/Register";
import NavBar from "./Pages/Shared/NavBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrdersByMail from "./Pages/OrdersByMail/OrdersByMail";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Payment from "./Pages/Payment/Payment";
import AddAReview from "./Pages/Dashboard/AddAReview";
import Reviews from "./Pages/Reviews/Reviews";
import AllUser from "./Pages/Dashboard/AllUser";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddAProduct from "./Pages/Dashboard/AddAProduct";
import NotFound from "./Pages/Shared/NotFound";
import Blogs from "./Pages/Blogs/Blogs";
import MyPortFolio from "./Pages/MyPortFolio/MyPortFolio";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import useAdmin from "./hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";


function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<MyPortFolio></MyPortFolio>}></Route>

        <Route path="/purchase/:id" element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>


        <Route path="/dashboard" element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={!admin ? <OrdersByMail></OrdersByMail> : <ManageOrders></ManageOrders>}></Route>

          <Route path="myOrders" element={<RequireAuth>
            <OrdersByMail></OrdersByMail>
          </RequireAuth>}></Route>

          <Route path="myProfile" element={<RequireAuth>
            <MyProfile></MyProfile>
          </RequireAuth>}></Route>

          <Route path='addAReview' element={<RequireAuth>
            <AddAReview></AddAReview>
          </RequireAuth>}></Route>

          <Route path='allUser' element={<RequireAdmin>
            <AllUser></AllUser>
          </RequireAdmin>}></Route>

          <Route path='manageorders' element={<RequireAdmin>
            <ManageOrders></ManageOrders>
          </RequireAdmin>}></Route>

          <Route path='addAProduct' element={<RequireAdmin>
            <AddAProduct></AddAProduct>
          </RequireAdmin>}></Route>

          <Route path="payment/:orderId" element={
            <Payment></Payment>
          }></Route>

          <Route path="myOrders/payment/:orderId" element={
            <Payment></Payment>
          }></Route>

        </Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
