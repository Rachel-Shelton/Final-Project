import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import avatar from "../avatar.jpg";
import { UserContext } from "./UserContext";

const PostDetails = () => {
  const { currentUser } = useContext(UserContext);
  // console.log(currentUser);
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
              <Status>{chosenPost.status}</Status>
            </Top>
            {chosenPost.media[0] && <Media src={chosenPost.media[0].url} />}
          </Post>
          <Details>
            <Timestamp>{chosenPost.timestamp}</Timestamp>
          </Details>
        </Entry>

        {currentUser.data.username === chosenPost.username ? null : (
          <Others>
            <>
              <More>More posts from {chosenPost.username}</More>
              <None>... That's all folx ...</None>
            </>
          </Others>
        )}
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
  min-height: 81vh;
  display: flex;
  justify-content: center;
  margin-top: -50px;
`;

const Entry = styled.div`
  position: relative;
  background-color: var(--primary-color);
  margin-top: 11vh;
  margin-left: -300px;
  max-height: 325px;
  cursor: pointer;
`;

const Post = styled.div``;

const Top = styled.div`
  position: relative;
  top: 0;
  max-width: 350px;
`;

const Avatar = styled.img`
  width: 65px;
  margin: 5px;
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
  padding: 35px;
  margin-top: -40px;
  margin-left: 75px;
  margin-right: 5px;
  border: 1px solid black;
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
  margin-top: -218px;
  margin-left: 510px;
  position: absolute;
  top: 0px;
  /* right: 5px; */
  /* width: 75px; */
`;

const Liked = styled.div``;

const Shared = styled.div``;

const Media = styled.img`
  margin-right: 20px;
  width: 200px;
  margin-left: 375px;
  margin-top: -125px;
`;

const Others = styled.div`
  background-color: var(--primary-color);
  margin-top: 82px;
  margin-left: 50px;
  margin-right: -300px;
  height: 200px;
  width: 225px;
`;

const More = styled.div`
  font-style: italic;
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-top: 5px;
`;

const None = styled.div`
  background-color: white;
  margin: 20px 15px 0px 15px;
  height: 75px;
  color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PostDetails;
