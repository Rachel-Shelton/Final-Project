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
        console.log(entry);
        return entry.commonName
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      } else {
        return "Uh-Oh. Looks like we couldn't find what you were looking for.";
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
        </SearchDiv>
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
                    <List>
                      <span>{plant}</span>
                    </List>
                  </div>
                );
              })}
            </Container>
          )}
        </UList>
      </div>
    </>
  );
};

const SearchDiv = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Input = styled.input`
  width: 200px;
  border: 1px solid #555;
  padding: 5px;
  &:focus {
    outline: none;
  }
`;

const UList = styled.ul`
  position: absolute;
  max-height: 200px;
  overflow-y: scroll;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 10px;
  background: white;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
`;

const Container = styled.div``;

const List = styled.li`
  list-style-type: none;
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
