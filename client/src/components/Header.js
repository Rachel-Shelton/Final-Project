import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <Head>
        <Search>
          <SearchBar />
        </Search>
        <Home to="/">Plant Parenthood</Home>
        {/* with a dropdown */}
        <User>User</User>
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

const User = styled.div``;

export default Header;
