import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LoginRequire from "./components/auth";
import MainLayout from "./components/layouts/MainLayout";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Archive from "./pages/archive";
import Contact from "./pages/contact";
import Favorites from "./pages/favorites";
import AddProduct from "./pages/product/addProduct";
import EditProduct from "./pages/product/editProduct";
import MyProducts from "./pages/product/myProducts";
import ProductDetails from "./pages/product/productDitails";
import UserDashboard from "./pages/user";

function App() {
    return (
        <React.Fragment>
            <ToastContainer />
            <Switch>
                <MainLayout>
                    <Route path="/login" component={Login} /> 
                    <Route path="/register" component={Register} /> 
                    <Route path="/my-products" render={() => (
                        <LoginRequire>
                            <MyProducts />
                        </LoginRequire>
                    )} /> 
                    <Route path="/add-product" render={() => (
                        <LoginRequire>
                            <AddProduct />
                        </LoginRequire>
                    )} /> 
                    <Route path="/edit-product" render={() => (
                        <LoginRequire>
                            <EditProduct />
                        </LoginRequire>
                    )} /> 
                    <Route path="/user-info" render={() => (
                        <LoginRequire>
                            <UserDashboard />
                        </LoginRequire>
                    )} /> 
                    <Route path="/products/:id" component={ProductDetails} /> 
                    <Route path="/contact" component={Contact} /> 
                    <Route path="/favorites" component={Favorites} /> 
                    <Route path="/archive" component={Archive} /> 
                    <Route exact path="/" component={Home} /> 
                </MainLayout>
            </Switch>
        </React.Fragment>
    );
}

export default App;
