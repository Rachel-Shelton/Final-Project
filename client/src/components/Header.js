import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useHistory } from "react-router-dom";
import { UserContext } from "./UserContext";

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
        <div class="dropdown">
          <User onClick={showDropdown} class="dropbtn">
            User
          </User>
          {reveal && (
            <Menu id="myDropdown" class="dropdown-content">
              <Profile to="/profile">My Profile</Profile>
              <Settings to="/settings">Settings</Settings>
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
  margin-top: 5px;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: lightgrey;
  width: 97vw;
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
  background-color: lightgrey;
  border: none;
  margin-right: 30px;
  height: 25px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

const Profile = styled(Link)`
  text-decoration: none;
  :visited {
    color: black;
  }
`;

const Settings = styled(Link)`
  text-decoration: none;
  :visited {
    color: black;
  }
`;

const Logout = styled.button`
  background-color: lightgrey;
  border: none;
`;

export default Header;
