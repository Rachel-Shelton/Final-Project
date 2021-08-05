import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  // const handleLogOut = () => {
  //   if (currentUser) {
  //     setCurrentUser(undefined);

  // to landing page (here or in the tag?)
  //history.push to landing page
  //   }
  // };

  return (
    <>
      <Head>
        <Search>
          <SearchBar />
        </Search>
        <Home to="/">Plant Parenthood</Home>
        {/* with a dropdown */}
        <div class="dropdown">
          <select>
            <option value="blank" id="dropdown">
              User
            </option>
            <option>My Profile</option>
            <option>Settings</option>
            <option>Log Out</option>
          </select>

          {/* <User>User</User>
          <Menu>
            <Profile href="/profile">My Profile</Profile>
            <Settings href="/settings">Settings</Settings>
            {/* <Logout onClick={handleLogOut}>Log Out</Logout> */}
          {/*<Logout>Log Out</Logout>
          </Menu> */}
        </div>
      </Head>
    </>
  );
};

const Head = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: purple;
  width: 95vw;
`;

const Search = styled.div``;

const Home = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);
  :visited {
    color: var(--primary-color);
  }
`;

const User = styled.button`
  background-color: purple;
  border: none;
`;

const Menu = styled.div``;

const Profile = styled.a`
  text-decoration: none;
  :visited {
    color: black;
  }
`;

const Settings = styled.a`
  text-decoration: none;
  :visited {
    color: black;
  }
`;

const Logout = styled.button`
  background-color: purple;
  border: none;
`;

export default Header;
