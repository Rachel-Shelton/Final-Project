import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import avatar from "../avatar.jpg";

const PostDetails = () => {
  const { _id } = useParams();
  // console.log(_id);

  const [chosenPost, setChosenPost] = useState(undefined);

  useEffect(() => {
    if (_id) {
      fetch(`/post/${_id}`)
        .then((res) => res.json())
        .then(({ data }) => {
          console.log("chosen", data);
          setChosenPost(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [_id]);

  // console.log(chosenPost);

  return chosenPost ? (
    <>
      <Container>
        <Entry>
          <Post>
            <Top>
              <Avatar src={avatar} />
              <Name>{chosenPost.username}</Name>
              <Status>
                {chosenPost.status}
                {chosenPost.media[0] && <Media src={chosenPost.media[0].url} />}
              </Status>
            </Top>
          </Post>
          <Details>
            <Timestamp>{chosenPost.timestamp}</Timestamp>
          </Details>
        </Entry>
      </Container>
    </>
  ) : (
    <Loading>Loading...</Loading>
  );
};

const Loading = styled.div`
  margin-top: 5vh;
`;

const Container = styled.div`
  min-height: 72vh;
`;

const Entry = styled.div`
  position: relative;
  background-color: var(--primary-color);
  margin-top: 10vh;
  height: 300px;
  width: 95vw;
  cursor: pointer;
`;

const Post = styled.div`
  display: flex;
  /* background-color: yellow; */
`;

const Top = styled.div`
  position: relative;
  top: 0;
  /* background-color: red; */
`;

const Avatar = styled.img`
  width: 65px;
  margin: 5px;
  /* background-color: yellow; */
`;

const Name = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: left;
  margin-left: 5px;
  position: absolute;
  top: 0;
  margin-top: 5px;
  width: 300px;
  margin-left: 95px;
  /* background-color: orange; */
`;

const Status = styled.div`
  font-size: 16px;
  font-style: italic;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px;
  margin-top: -65px;
  margin-left: 165px;
  margin-right: 5px;
  border: 1px solid black;
  /* background-color: purple; */
`;

const Details = styled.div`
  margin-left: 5px;
  position: absolute;
  bottom: 0;
  margin-bottom: 5px;
  height: 30%;
  width: 95vw;
  /* background-color: blue; */
`;

const Timestamp = styled.div`
  position: absolute;
  bottom: 0;
`;

const Liked = styled.div``;

const Shared = styled.div``;

const Media = styled.img`
  margin: 5px;
  width: 130px;
`;

export default PostDetails;
