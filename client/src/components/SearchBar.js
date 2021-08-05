import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    fetch("/plants")
      .then((res) => res.json())
      .then(({ data }) => {
        // console.log(data);
        setSearchList(data);
      });
  }, []);

  const suggestionMatch =
    searchList &&
    searchList.filter((entry) => {
      if (searchValue.length >= 3) {
        // console.log(entry);
        return entry.commonName
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      } else {
        return "";
      }
    });

  const getPlantPage = (_id) => {
    history.push(`/plant/${_id}`);
    setSearchValue("");
  };

  return (
    <>
      <div>
        <SearchDiv>
          <Input
            value={searchValue}
            onChange={(ev) => setSearchValue(ev.target.value)}
            disabled={!searchList}
          />
          <UList>
            {suggestionMatch && (
              <Container>
                {suggestionMatch.map((suggestion) => {
                  const plant = suggestion.commonName;
                  return (
                    <div
                      onClick={() => {
                        getPlantPage(suggestion._id);
                      }}
                    >
                      <List key={suggestion._id}>
                        <div>
                          <span>{plant}</span>
                        </div>
                      </List>
                    </div>
                  );
                })}
              </Container>
            )}
          </UList>
        </SearchDiv>
      </div>
    </>
  );
};

const SearchDiv = styled.div`
  /* @media (max-width: 768px) {
    display: none;
  } */
`;

const Input = styled.input`
  width: 200px;
  border: 1px solid #555;
  padding: 5px;
  &:focus {
    outline: none;
  }
`;

const UList = styled.div`
  position: absolute;
  max-height: 200px;
  overflow-y: scroll;
  background: white;
  ::-webkit-scrollbar {
    width: 0px;
  }
  /* background-color: red; */
`;

const Container = styled.div`
  /* background-color: orange; */
  /* float: left; */
`;

const List = styled.div`
  /* margin-left: -30px; */
  width: 200px;
  font-size: 12px;
  padding: 2.5px 5px;
  &:hover {
    background: var(--primary-color);
    color: white;
  }
  &:active {
    background: var(--primary-color);
  }
`;

export default Search;
