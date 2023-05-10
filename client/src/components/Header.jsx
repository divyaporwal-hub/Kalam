import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import axios from "axios";
import { BASE_URL } from "../helper/ref";
import { RiQuillPenLine } from "react-icons/ri";
import Avatar from "../images/userAvatar.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  let localData = JSON.parse(localStorage.getItem("userInfo"));
  const [searchText, setSearchText] = useState("");
  const [allBlogs, setAllBlogs] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    axios
      .get(`${BASE_URL}/blog/getsearchblogs`, {
        params: {
          searchTitle: searchText,
        },
      })
      .then((response) => {
        console.log(response.data);
        setAllBlogs(response.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="main__header">
      <div className="header">
        <div className="leftSection">
          <Link to={"/"}>
            <h1 className="logoName">Kalam</h1>
          </Link>
          {/* <form onSubmit="handleSubmit"> */}
          <div className="searchContainer">
            <input
              type="search"
              name=""
              id=""
              value={searchText}
              placeholder="Search a blog..."
              onChange={handleSearch}
            />
            {searchText && (
              <div className="searchResultContainer">
                {allBlogs &&
                  allBlogs.map((blog, index) => {
                    return (
                      <div className="searchResult" key={index}>
                        {blog.blogHeading}
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
          {/* </form> */}
        </div>
        <div className="rightSection">
          <NavLink to={localData ? `/write` : "/login"} className={"writeLink"}>
            <FontAwesomeIcon icon={faPenAlt} style={{ fontSize: "1rem" }} />
            Write
          </NavLink>
          <NavLink to={localData ? `/profile/${localData.userName}` : "/login"}>
            <img src={Avatar} alt="user" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
