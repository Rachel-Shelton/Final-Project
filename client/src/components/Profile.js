import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { UserContext } from "./UserContext";
import moment from "moment";

import Wishlist from "./Wishlist";

import banner from "../banner.jpg";
import avatar from "../avatar.jpg";

const Profile = () => {
  const { currentUser } = useContext(UserContext);

  console.log("CU", currentUser);

  const [statusUpdate, setStatusUpdate] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const timestamp = moment().format("YYYY-MM-DD");

  const handlePost = () => {
    fetch("/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: currentUser.data.username,
        status: statusUpdate,
        timestamp: timestamp,
        // media: status.media,
      }),
    }).then(() => {
      setStatusUpdate("");
    });
  };

  useEffect(() => {
    setLoading(true);
    fetch("/posts")
      .then((res) => res.json())
      .then(({ data }) => {
        // console.log(data);
        // console.log(data.username, currentUser.data.username);
        setPosts(data);
        setLoading(false);
      });
  }, []);
  // console.log(posts);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Images>
        <Banner src={banner} />
        <Border>
          <Avatar src={avatar} />
        </Border>
      </Images>
      <Contents>
        <Personals>
          <Details>Your Details: </Details>
          <Name>
            Name: <UserInfo>{currentUser.data.name}</UserInfo>
          </Name>
          <Email>
            Email: <UserInfo>{currentUser.data.email}</UserInfo>
          </Email>
          <BDAY>
            Birthday: <None>Not Available</None>
          </BDAY>
          <Joined>
            With us since: <None>Not Available</None>
          </Joined>
        </Personals>
        <Posts>
          <ToPost>
            <Text
              value={statusUpdate}
              type="text"
              placeholder="What's on your mind?"
              onChange={(ev) => {
                setStatusUpdate(ev.target.value);
              }}
            />
            <Buttons>
              <Submit onClick={handlePost}>Post</Submit>
              <Clear
                onClick={() => {
                  setStatusUpdate("");
                }}
              >
                Clear
              </Clear>
            </Buttons>
          </ToPost>
          <Feed>
            {posts.map((post) => {
              if (currentUser.data.username === post.username) {
                // console.log("UPosts", post);
                return (
                  <Entry>
                    <UName>{post.username}</UName>
                    <Status>{post.status}</Status>
                    {post.media[0] && <Media src={post.media[0].url} />}
                    <Timestamp>{post.timestamp}</Timestamp>
                  </Entry>
                );
              }
            })}
          </Feed>
        </Posts>
        <Wishlist />
      </Contents>
    </>
  );
};

const Images = styled.div`
  margin-top: 6vh;
  position: relative;
`;

const Banner = styled.img`
  position: relative;
  height: 200px;
  width: 97vw;
  top: 0px;
  left: 0px;
`;

const Border = styled.div`
  position: absolute;
  top: 160px;
  left: 20px;
  width: 80px;
  height: 80px;
  background-color: pink;
  border-radius: 5px;
`;

const Avatar = styled.img`
  position: absolute;
  margin-left: 2px;
  margin-top: 2px;
  border-radius: 50%;
  height: 75px;
`;

const Contents = styled.div`
  padding: 10px;
  display: flex;
  flex: column;
  height: 75vh;
  background-color: yellow;
`;

const Personals = styled.div`
  /* background-color: red; */
  border: 1px solid pink;
  height: 250px;
  margin: 20px 35px 0px 10px;
  padding: 2px;
`;

const Details = styled.div`
  margin-bottom: 10px;
`;

const Name = styled.div``;

const UserInfo = styled.div`
  font-size: 12px;
`;

const Email = styled.div``;

const BDAY = styled.div``;

const Joined = styled.div``;

const None = styled.div`
  font-size: 8px;
`;

// const Wishlist = styled(Link)`
//   color: black;
//   text-decoration: none;
//   :visited {
//     color: black;
//   }
// `;

const Posts = styled.div`
  background-color: blue;
`;

const ToPost = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  /* background-color: purple; */
`;

const Text = styled.textarea`
  position: relative;
  border: 1px solid var(--primary-color);
  margin: 5px;
  height: 85px;
  width: 400px;
  resize: none;

  //how to make height change with inner text?
`;

const Buttons = styled.div`
  margin: 0px 5px 0px 5px;
  display: flex;
  /* background-color: red; */
`;

const Submit = styled.button`
  margin: 5px;
  width: 100px;
  /* height: 50px; */
`;

const Clear = styled.button`
  margin: 5px 5px 5px 185px;
  width: 100px;
  /* height: 50px; */
`;

const Feed = styled.div``;

const Entry = styled.div`
  position: relative;
  border: 1px solid var(--primary-color);
  margin: 5px;
  height: 120px;
  width: 400px;

  //how to make height change with inner text?
`;

const UName = styled.div``;

const Status = styled.div``;

const Media = styled.img`
  height: 30px;
`;

const Timestamp = styled.div`
  position: absolute;
  bottom: 0px;
`;

export default Profile;
