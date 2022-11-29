/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./componentes/Login";
import Register from "./componentes/Register";
import CreateProduct from "./componentes/CreateProduct";
import Home from "./componentes/Home";
import { DetailProduct } from "./componentes/DetailProduct";
import ShoppingCards from "./componentes/User/ShoppingInfo/CardsShop";
import ProductCards from "./componentes/ProductCards";
import EditProduct from "./componentes/EditProduct";
import AdminPanel from "./componentes/Admin/AdminPanel";
import { ShoppingCartProvider } from "./componentes/ShoppingCart/ContextShoppingCart";
import { useAppSelector, useAppDispatch } from "./hooks";
import getObjectSession from "./funciones/getObjectSession";
import { useEffect } from "react";
//import { setData } from "./redux/slices/UserSlice";
import Confirmation from "./componentes/Confirmation";
import Protected from "./componentes/auth/Protected";
import UserInfo from "./componentes/User/UserInfo";
import UserProtected from "./componentes/auth/UserProtected";
import Header from "./componentes/Header";
import UserEdit from "./componentes/User/UserEdit";
//import HeaderAdmin from './componentes/Admin/Header'
import Success from "./componentes/Success";

import Unaothorized from "./componentes/auth/Unaothorized";

import { setUserData } from "./redux/slices/UserSlice/UserActions";

//import UsersPanel from "./componentes/Admin/UsersPanel/UsersPanel";
import AdminPanelUsers from "./componentes/Admin/AdminPanelUsers";
import PaymentsPanel from "./componentes/Admin/PaymentsPanel/PaymentsPanel";
import AdminPanelPayments from "./componentes/Admin/AdminPanelPayments";
import { Failure } from "./componentes/Failure";
import { AboutUs } from "./componentes/AboutUs";
import { Refunds } from "./componentes/refunds/Refunds";
import { FormCreated } from "./componentes/refunds/FormCreated";

import DefaultPage from "./componentes/DefaultPage";
import { getAllProducts } from "./redux/slices/ProductSlice/productActions";
import PaymentsDetail from "./componentes/Admin/PaymentsDetail";
import Footer from "./componentes/Footer";

function App() {
  const { username } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  useEffect(() => {
    const session = getObjectSession();
    if (session) {
      dispatch(setUserData());
    }
    dispatch(getAllProducts());
  }, []);

  return (
    <ShoppingCartProvider>
      <div className="App flex flex-col items-center bg-[#FFFDE7]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Login"
            element={username ? <Navigate to="/" replace={true} /> : <Login />}
          />
          <Route
            path="/Register"
            element={
              username ? <Navigate to="/" replace={true} /> : <Register />
            }
          />
          <Route
            path="/createproduct"
            element={
              <Protected>
                <CreateProduct />
              </Protected>
            }
          />
          <Route path="/products/:id" element={<DetailProduct />} />
          <Route path="/shopping" element={<ShoppingCards />} />
          <Route path="/" element={<ProductCards />} />
          <Route path="/users/confirmation/:token" element={<Confirmation />} />
          <Route
            path="/User"
            element={
              <UserProtected>
                <>
                  <Header />
                  <UserInfo />
                </>
              </UserProtected>
            }
          />
          <Route
            path="/UserEdit"
            element={
              <UserProtected>
                <>
                  <Header />
                  <UserEdit />
                </>
              </UserProtected>
            }
          />
          <Route
            path="/admin"
            element={
              <Protected>
                <AdminPanel />
              </Protected>
            }
          />
          <Route
            path="/admin/payments/:id"
            element={
              <Protected>
                <PaymentsDetail />
              </Protected>
            }
          />
          <Route
            path="/admin/payments"
            element={
              <Protected>
                <AdminPanelPayments />
              </Protected>
            }
          />
          <Route
            path="/admin/users"
            element={
              <Protected>
                <AdminPanelUsers />
              </Protected>
            }
          />
          <Route
            path="/admin/:id"
            element={
              <Protected>
                <>
                  <EditProduct />
                  <Footer />
                </>
              </Protected>
            }
          />
          <Route path="/formcreated" element={<FormCreated />} />
          <Route path="/refunds/:id" element={<Refunds />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/success" element={<Success />} />
          <Route
            path="/unauthorized"
            element={
              <Navigate to='/login'/>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Header />
                <DefaultPage />
              </>
            }
          />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
