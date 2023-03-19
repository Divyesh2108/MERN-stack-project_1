import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import HeaderComponent from 'components/HeaderComponent';
import FooterComponent from 'components/FooterComponent';
// Publicly available pages
import HomePage from 'pages/HomePage';
import CartPage from 'pages/CartPage';
import ProductListPage from 'pages/ProductListPage';
import ProductDetailsPage from 'pages/ProductDetailsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import UserProfilePage from 'pages/user/UserProfilePage';
import UserOrdersDetailspage from 'pages/user/UserOrdersDetailspage';
import UserCartDetailsPage from 'pages/user/UserCartDetailsPage';
import UserOrdersPage from 'pages/user/UserOrdersPage';
import ProtectedRoutesComponents from 'components/ProtectedRoutesComponents';
import AdminUsersPage from 'pages/admin/AdminUsersPage';
import AdminEditUserPage from 'pages/admin/AdminEditUserPage';
import AdminProductPage from 'pages/admin/AdminProductPage';
import AdminCreateProductPage from 'pages/admin/AdminCreateProductPage';
import AdminEditProductPage from 'pages/admin/AdminEditProductPage';
import AdminOrderPage from 'pages/admin/AdminOrderPage';
import AdminOrderDetailsPage from 'pages/admin/AdminOrderDetailsPage';
import AdminChatsPage from 'pages/admin/AdminChatsPage';
import AdminAnalyticsPage from 'pages/admin/AdminAnalyticsPage';
import RoutesWithUserChatComponent from 'components/user/RoutesWithUserChatComponent';
import ScrolltoTop from 'components/utils/ScrolltoTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrolltoTop />
        <HeaderComponent />

        <Routes>
          <Route element={<RoutesWithUserChatComponent />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/product-list' element={<ProductListPage />} />
            <Route path='/product-details' element={<ProductDetailsPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Route>

          {/* Protecte users Pages */}
          <Route element={<ProtectedRoutesComponents admin={false} />}>
            <Route path='/user' element={<UserProfilePage />} />
            <Route path='/user/my-orders' element={<UserOrdersPage />} />
            <Route path='/user/cart-details' element={<UserCartDetailsPage />} />
            <Route path='/user/order-details' element={<UserOrdersDetailspage />} /> */
          /* </Route>


          {/* Protected Admin Pages */}
          <Route element={<ProtectedRoutesComponents admin={true} />}>
            <Route path='/admin/users' element={<AdminUsersPage />} />
            <Route path='/admin/edit-user' element={<AdminEditUserPage />} />
            <Route path='/admin/products' element={<AdminProductPage />} />
            <Route path='/admin/create-new-product' element={<AdminCreateProductPage />} />
            <Route path='/admin/edit-product' element={<AdminEditProductPage />} />
            <Route path='/admin/order-details/:id' element={<AdminOrderDetailsPage />} />
            <Route path='/admin/chats' element={<AdminChatsPage />} />
            <Route path='/admin/analytics' element={<AdminAnalyticsPage />} />
            <Route path='/admin/orders' element={<AdminOrderPage />} />
          </Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App;
