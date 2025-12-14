import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/itemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { MainLayout } from "./Layouts/MainLayout";
import { AdminLayout } from "./Layouts/AdminLayout";
import { Login } from "./components/Login/Login";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={ItemDetailContainer} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/carrito" element={<Cart />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Login />} />
            <Route
              path="alta-productos"
              element={
                <RutaProtegida>
                  {" "}
                  <ProductFormContainer />
                </RutaProtegida>
              }
            />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
