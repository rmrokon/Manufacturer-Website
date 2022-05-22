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


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/purchase/:id" element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>

        <Route path="/myOrders" element={<RequireAuth>
          <OrdersByMail></OrdersByMail>
        </RequireAuth>}></Route>

        <Route path="/dashboard" element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<OrdersByMail></OrdersByMail>}></Route>

        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
