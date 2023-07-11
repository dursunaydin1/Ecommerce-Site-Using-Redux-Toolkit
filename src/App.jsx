import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import Home from "./pages/home/Home";
import { Footer } from "./components/footer/Footer";
import { Register } from "./pages/login/Register";
import { Login } from "./pages/login/Login";
import { Account } from "./pages/account/Account";
import { useSelector } from "react-redux";

const App = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const cartItems = useSelector((state) => state.cart.itemList);

  console.log(cartItems);
  return (
    <>
      {isLogin && (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
      {!isLogin && <Login />}
    </>
  );
};

export default App;
