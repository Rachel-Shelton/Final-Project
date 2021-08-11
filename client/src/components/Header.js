import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useHistory } from "react-router-dom";
import { UserContext } from "./UserContext";

import { FiLogOut } from "react-icons/fi";

const Header = () => {
  let history = useHistory();

  const { setCurrentUser, currentUser } = useContext(UserContext);
  const [reveal, setReveal] = useState(false);

  const showDropdown = () => {
    setReveal((reveal) => {
      return !reveal;
    });
  };

  return (
    <>
      <Head>
        <Search>
          <SearchBar />
        </Search>
        <Home to="/home">Plant Parenthood</Home>
        <div className="dropdown">
          <User onClick={showDropdown} className="dropbtn">
            User
          </User>
          {reveal && (
            <Menu id="myDropdown" className="dropdown-content">
              <Profile to="/profile">My Profile</Profile>
              {/* <Wishlist to="/wishlist">My Wishlist</Wishlist> */}
              <Settings to="/settings">Settings</Settings>
              <Logout
                onClick={() => {
                  setCurrentUser(undefined);
                  localStorage.removeItem("loggedIn");
                  history.push("/");
                }}
              >
                {/* <FiLogOut />  */}
                Log Out
              </Logout>
            </Menu>
          )}
        </div>
      </Head>
    </>
  );
};

const Head = styled.div`
  margin-bottom: -25px;
  margin-top: 5px;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: lightgrey;
  width: 98vw;
`;

const Search = styled.div``;

const Home = styled(Link)`
  font-size: 35px;
  font-weight: bold;
  text-decoration: none;
  color: var(--primary-color);
  :visited {
    color: var(--primary-color);
  }
`;

const User = styled.button`
  margin-top: 8px;
  margin-right: 10px;
  margin-left: -7px;
  margin-bottom: -10px;
  display: flex;
  justify-content: left;
  font-size: 15px;
  font-family: "Garamond", serif;
  background-color: lightgrey;
  color: var(--primary-color);
  border: none;
  height: 25px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

const Profile = styled(Link)`
  color: var(--primary-color);
  text-decoration: none;
  :visited {
    color: var(--primary-color);
  }
`;

const Wishlist = styled(Link)`
  margin-right: 5px;
  color: var(--primary-color);
  text-decoration: none;
  :visited {
    color: var(--primary-color);
  }
`;

const Settings = styled(Link)`
  color: var(--primary-color);
  text-decoration: none;
  :visited {
    color: var(--primary-color);
  }
`;

const Logout = styled.button`
  margin-left: -7px;
  display: flex;
  justify-content: left;
  font-size: 15px;
  font-family: "Garamond", serif;
  color: var(--primary-color);
  background-color: lightgrey;
  border: none;
`;

export default Header;
