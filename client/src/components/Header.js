import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();

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
        {/* with a dropdown */}
        <div class="dropdown">
          <User onClick={showDropdown} class="dropbtn">
            User
          </User>
          {reveal && (
            <Menu id="myDropdown" class="dropdown-content">
              <Profile href="/profile">My Profile</Profile>
              <Settings href="/settings">Settings</Settings>
              <Logout
                onClick={() => {
                  // setCurrentUser(undefined);
                  history.push("/");
                }}
              >
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
  margin-right: 30px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

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
