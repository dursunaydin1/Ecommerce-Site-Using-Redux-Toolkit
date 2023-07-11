import "./header.css";
import Medicine from "../../assets/images/Medicine.svg";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "./Card";
import User from "./User";
import { Link } from "react-router-dom";

export const Header = () => {
  // Bu kodlar, sayfanın kaydırılmasıyla ilgili olayları dinlemek ve sayfayı belirli bir konuma smooth scroll ile hareket ettirmek için kullanılabilir.

  // window.addEventListener("scroll", function () {
  //   const header = this.document.querySelevtor(".header");
  //   header.classList.toogle("active", this.window.scrollY > 100);
  // });
  // window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          <div className="logo">
            <Link to="/">
              <img src={Medicine} alt="Medicine" />
            </Link>
          </div>
          <div className="search flex">
            <AiOutlineSearch className="searchIcon" />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="account flexCenter">
            <Card />
            <User />
          </div>
        </div>
      </header>
    </>
  );
};