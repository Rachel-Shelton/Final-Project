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
      <div>Feed</div>
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

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  :visited {
    color: black;
  }
`;

const Entry = styled.div`
  border: 1px solid var(--primary-color);
  margin: 5px;
  height: 100px;
  cursor: pointer;
`;

const Name = styled.div``;

const Status = styled.div``;

const Timestamp = styled.div``;

export default Feed;
