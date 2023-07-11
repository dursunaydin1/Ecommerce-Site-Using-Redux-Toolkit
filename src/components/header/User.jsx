import { IoSettingsOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { GrHelp } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import { useState } from "react";

export const User = () => {
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);

  const close = () => {
    setProfileOpen(null);
  };

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <div className="profile">
        {user ? (
          <>
            <button
              className="img"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                alt=""
              />
            </button>
            {profileOpen && (
              <div className="openProfile boxItems" onClick={close}>
                <div className="image">
                  <Link to={"/account"}>
                    <div className="img">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                        alt=""
                      />
                    </div>
                  </Link>
                  <div className="text">
                    <h4>Dursun Aydın</h4>
                    <label htmlFor="">Samsun, Turkey</label>
                  </div>
                </div>
                <Link to={"/account"}>
                  <button className="box">
                    <IoSettingsOutline className="icon" />
                    <h4>Hesabım</h4>
                  </button>
                </Link>
                <button className="box">
                  <BsBagCheck className="icon" />
                  <h4>Siparişlerim</h4>
                </button>
                <button className="box">
                  <AiOutlineHeart className="icon" />
                  <h4>İstek Listesi</h4>
                </button>
                <button className="box">
                  <GrHelp className="icon" />
                  <h4>Yardım</h4>
                </button>
                <button className="box" onClick={logoutHandler}>
                  <BiLogOut className="icon" />
                  <h4>Çıkış</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>Hesabım</button>
        )}
      </div>
    </>
  );
};

export default User;
