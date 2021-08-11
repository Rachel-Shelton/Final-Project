import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import moment from "moment";

import Wishlist from "./Wishlist";

import banner from "../banner.jpg";
import avatar from "../avatar.jpg";

const Profile = () => {
  const { currentUser } = useContext(UserContext);

  console.log("CU", currentUser);

  const [statusUpdate, setStatusUpdate] = useState("");
  const [updateFeed, setUpdateFeed] = useState(false);
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
      setUpdateFeed((updateFeed) => !updateFeed);
    });
  };

  useEffect(() => {
    setLoading(true);
    fetch("/posts")
      .then((res) => res.json())
      .then(({ data }) => {
        setPosts(data);
        setLoading(false);
      });
  }, [updateFeed]);

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
        <UserName>{currentUser.data.username}</UserName>
      </Images>
      <Contents>
        <Personals>
          <Details>Your Details </Details>
          <Name>
            Name <UserInfo>{currentUser.data.name}</UserInfo>
          </Name>
          <Email>
            Email <UserInfo>{currentUser.data.email}</UserInfo>
          </Email>
          <BDAY>
            Birthday <None>Not Available</None>
          </BDAY>
          <Joined>
            With us since <None>Not Available</None>
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
                  <NavLink to={`/post/${post._id}`}>
                    <Entry>
                      <UName>{post.username}</UName>
                      <Status>{post.status}</Status>
                      <Timestamp>{post.timestamp}</Timestamp>
                    </Entry>
                  </NavLink>
                );
              }
            })}
          </Feed>
        </Posts>
        <Wishes>
          <Wishlist />
        </Wishes>
        <Blog>
          <Follow>
            Blogs you follow *<Demo>JonnyG</Demo>
          </Follow>
          <Mutuals>Companion Plants *</Mutuals>
        </Blog>
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
  top: 145px;
  left: 30px;
  width: 95px;
  height: 95px;
  background-color: pink;
  border-radius: 5px;
`;

const Avatar = styled.img`
  position: absolute;
  margin-left: 2px;
  margin-top: 2px;
  border-radius: 50%;
  height: 90px;
`;

const UserName = styled.div`
  font-size: 18px;
  position: absolute;
  margin-left: 130px;
  margin-top: -30px;
`;

const Contents = styled.div`
  padding: 10px;
  display: flex;
  flex: column;
  height: 75vh;
  /* background-color: pink; */
`;

const Personals = styled.div`
  background-color: var(--primary-color);
  border: 1px solid pink;
  height: 250px;
  width: 250px;
  margin: 40px 20px 0px 20px;
`;

const Details = styled.div`
  margin: 5px;
`;

const Name = styled.div`
  font-size: 12px;
  margin: 5px 10px 5px 10px;
  padding: 5px;
  border: 1px solid black;
`;

const UserInfo = styled.div`
  font-size: 16px;
`;

const Email = styled.div`
  font-size: 12px;
  margin: 5px 10px 5px 10px;
  padding: 5px;
  border: 1px solid black;
`;

const BDAY = styled.div`
  font-size: 12px;
  margin: 5px 10px 5px 10px;
  padding: 5px;
  border: 1px solid black;
`;

const Joined = styled.div`
  font-size: 12px;
  margin: 5px 10px 5px 10px;
  padding: 5px;
  border: 1px solid black;
`;

const None = styled.div`
  font-size: 16px;
`;

const Posts = styled.div`
  background-color: var(--primary-color);
  margin-right: -25px;
`;

const ToPost = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
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
  background-color: white;
  position: relative;
  border: 1px solid var(--primary-color);
  margin: 10px 15px 10px 12px;
  /* height: 120px; */
  width: 400px;
  padding: 5px;

  //how to make height change with inner text?
`;

const UName = styled.div``;

const Status = styled.div``;

const Media = styled.img`
  height: 60px;
`;

const Timestamp = styled.div`
  margin-top: 5px;
  bottom: 0px;
`;

const Wishes = styled.div`
  background-color: var(--primary-color);
  margin-left: 45px;
  margin-right: 20px;
  width: 250px;
  height: 400px;
`;

const Blog = styled.div`
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  width: 200px;
  height: 200px;
`;

const Follow = styled.div`
  margin: 5px 5px 20px 5px;
`;

const Demo = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 2px;
  margin: 2px;
  height: 20px;
  width: 120px;
  /* border: 1px solid black; */
`;

const Mutuals = styled.div`
  margin-left: 5px;
`;

export default Profile;
