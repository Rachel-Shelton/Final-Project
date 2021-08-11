import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const Feed = () => {
  const { currentUser } = useContext(UserContext);

  const [posts, setPosts] = useState(undefined);

  useEffect(() => {
    fetch("/posts")
      .then((res) => res.json())
      .then(({ data }) => {
        // console.log(data);
        setPosts(data);
      });
  }, []);
  // console.log(posts);

  return posts ? (
    <>
      <Container>
        <Title>Feed</Title>
        <div>
          {posts.map((post) => {
            // console.log(post);
            return (
              <NavLink to={`/post/${post._id}`}>
                <Entry>
                  <Name>{post.username}</Name>
                  <Status>{post.status}</Status>
                  <Timestamp>{post.timestamp}</Timestamp>
                </Entry>
              </NavLink>
            );
          })}
        </div>
      </Container>
    </>
  ) : (
    <div>Loading...</div>
  );
};

const Container = styled.div`
  margin: 0px 2px 0px 5px;
  background-color: var(--primary-color);
  width: 475px;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  :visited {
    color: black;
  }
`;

const Entry = styled.div`
  position: relative;
  background-color: white;
  position: relative;
  border: 1px solid var(--primary-color);
  margin: 5px 5px 5px 10px;
  height: 130px;
  width: 400px;
  //how to make height change with inner text?
  cursor: pointer;
`;

const Name = styled.div`
  margin-top: 10px;
  margin-left: 10px;
`;

const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  margin: 10px;
  padding: 5px;
  border: 1px solid black;
`;

const Timestamp = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  position: absolute;
  top: 0px;
  right: 5px;
  width: 75px;
`;

export default Feed;
