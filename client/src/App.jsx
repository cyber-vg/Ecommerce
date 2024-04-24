import React from 'react'
import { Route,  createRoutesFromElements } from 'react-router'
import Homepage from './Pages/Homepage'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Privacypolcy from './Pages/Privacypolcy'
import PagenotFound from './Pages/PagenotFound'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './components/Login/Login.jsx'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Pages/Cart.jsx'
import Notification from './Pages/Notification.jsx'
import Register from './Pages/Register.jsx'
import Otp from './components/Login/Otp.jsx'
import Dashboard from './Pages/User/Dashboard.jsx'
import PrivateRoute from './components/Routes/Private.jsx'
import AdminRoute from './components/Routes/AdminRoute.jsx'
import AdminDashboard from './Pages/Admin/AdminDashboard.jsx'
import Profile from './Pages/Admin/Profile.jsx'
import Category from './Pages/Admin/Category.jsx'
import Product from './Pages/Admin/Product.jsx'
import User from './Pages/Admin/User.jsx'
import UserProfile from './Pages/User/UserProfile.jsx'
import Userorders from './Pages/User/Userorders.jsx'
import Getproducts from './Pages/Admin/Getproducts.jsx'
import UpdateProduct from './Pages/Admin/UpdateProduct.jsx'
import ProductDetail from './Pages/ProductDetail.jsx'

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route  path='/' element={<Homepage/>} />
    <Route  path='/product/:id' element={<ProductDetail/>} />
    <Route  path='/about' element={<About/>} />
    <Route  path='/contact' element={<Contact/>} />
    <Route  path='/policy' element={<Privacypolcy/>} />
    <Route  path='/login' element={<Login/>} />
    <Route  path='/cart' element={<Cart/>} />
    <Route  path='/notification' element={<Notification/>} />
    <Route  path='/register' element={<Register/>} />
    <Route  path='/user/otp' element={<Otp/>} />
<Route  path='/dashboard' element={<PrivateRoute/>} >

    <Route  path='user' element={<Dashboard/>} />
    <Route path='user/profile' element={<UserProfile/>}/>
    <Route path='user/orders' element={<Userorders/>}/>
</Route>
<Route  path='/dashboard' element={<AdminRoute/>} >
    <Route  path='admin' element={<AdminDashboard/>} />
    <Route path='admin/profile' element={<Profile/>} />
    <Route path='admin/create-category' element={<Category/>}/>
    <Route path='admin/create-product' element={<Product/>}/>
    <Route path='admin/product/:id' element={<UpdateProduct/>}/>
    <Route path='admin/getproducts' element={<Getproducts/>}/>
    <Route path='admin/users' element={<User/>}/>  
</Route>
 <Route  path='*' element={<PagenotFound/>} />
   </Route>
  )
)
  return (
    <>
   <RouterProvider  router={router} />
    </>
  )
}

export default App