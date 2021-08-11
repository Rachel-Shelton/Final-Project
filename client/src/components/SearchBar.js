import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState(undefined);
  const [clicked, setClicked] = useState(false);
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
          {clicked ? (
            <>
              <All>
                <AltIcon>
                  <BiSearchAlt
                    onClick={() => {
                      setClicked(false);
                    }}
                  />
                </AltIcon>
                <Input
                  value={searchValue}
                  onChange={(ev) => {
                    setSearchValue(ev.target.value);
                  }}
                  disabled={!searchList}
                  placeholder="Search"
                />
              </All>
            </>
          ) : (
            <Icon>
              <BiSearchAlt
                onClick={() => {
                  setClicked(true);
                }}
              />
            </Icon>
          )}

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

const SearchDiv = styled.div``;

const Icon = styled.div`
  font-size: 20px;
  color: green;
  margin-top: 10px;
  margin-left: 10px;
`;

const All = styled.div`
  display: flex;
`;

const AltIcon = styled.div`
  font-size: 20px;
  margin-top: 10px;
  margin-left: 10px;
`;

const Input = styled.input`
  margin-top: 5px;
  margin-left: 5px;
  width: 200px;
  border: 1px solid lightgrey;
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
