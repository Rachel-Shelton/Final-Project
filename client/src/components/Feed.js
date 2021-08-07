import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Feed = () => {
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
      <Title>Feed</Title>
      <div>
        {posts.map((post) => {
          //console.log(post);
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
    </>
  ) : (
    <div>Loading...</div>
  );
};

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  :visited {
    color: black;
  }
`;

const Entry = styled.div`
  position: relative;
  border: 1px solid var(--primary-color);
  margin: 5px;
  height: 120px;
  cursor: pointer;
`;

const Name = styled.div``;

const Status = styled.div``;

const Timestamp = styled.div`
  position: absolute;
  bottom: 0px;
`;

export default Feed;
