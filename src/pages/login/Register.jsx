import "./login.css";
import back from "../../assets/images/my-account.jpg";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="backImg">
            <img src={back} alt="" />
            <div className="text">
              <h3>Register</h3>
              <h1>Hesabım</h1>
            </div>
          </div>

          <form>
            <span>Email address</span>
            <input type="text" required />
            <span>Username * </span>
            <input type="text" required />
            <span>Password * </span>
            <input type="text" required />
            <span>Confirm Password * </span>
            <input type="text" required />
            <button className="button">Kayıt</button>
            <Link to="/login">Giriş</Link>
          </form>
        </div>
      </section>
    </>
  );
};