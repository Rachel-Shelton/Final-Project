import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
      <Entry>
        <Top>
          <Title>
            <Name>{chosenPost.username}</Name>
            <Status> {chosenPost.status}</Status>
          </Title>
        </Top>
        <Details>
          {chosenPost.media[0] && <Media src={chosenPost.media[0].url} />}
          <Timestamp>{chosenPost.timestamp}</Timestamp>
          <Liked> Liked By: {chosenPost.likedBy}</Liked>
          <Shared> Shared By: {chosenPost.propagatedBy}</Shared>
        </Details>
      </Entry>
    </>
  ) : (
    <Loading>Loading...</Loading>
  );
};

const Loading = styled.div`
  margin-top: 5vh;
`;

const Entry = styled.div`
  position: relative;
  border: 2px solid var(--primary-color);
  margin-top: 10vh;
  height: 300px;
  width: 95vw;
  cursor: pointer;
`;

const Top = styled.div`
  position: absolute;
  top: 0;
`;

const Title = styled.div`
  margin-top: 5px;
  width: 300px;
  margin-left: 160px;
`;

const Name = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: left;
  margin-left: 5px;
`;

const Status = styled.div`
  font-size: 16px;
  font-style: italic;
  display: flex;
  justify-content: left;
  margin-left: 50px;
`;

const Details = styled.div`
  margin-left: 5px;
  position: absolute;
  bottom: 0;
  height: 45%;
  width: 95vw;
`;

const Timestamp = styled.div``;

const Liked = styled.div``;

const Shared = styled.div``;

const Media = styled.img`
  width: 130px;
`;

export default PostDetails;
