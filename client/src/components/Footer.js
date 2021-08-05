import React from "react";
import styled from "styled-components";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <Container>
        <Horizontal>
          <Support>
            <strong>Help and Support:</strong>
            <div>FAQ</div>
            <div>Tracking your order</div>
            <div>Shipping Information</div>
            <div>How to become a seller</div>
          </Support>
          <Links>
            <strong>Company Info:</strong>
            <div>About Us</div>
            <div>Careers</div>
            <div>Reviews</div>
          </Links>
          <Contact>
            <strong>Contact Us:</strong>
            <div>Email: contact@plantparenthood.info</div>
            <div>Phone Number: 1(800)GREEN-TB</div>
            <div>Address:</div>
          </Contact>
        </Horizontal>
        <SocialMedia>
          <div>
            <strong>Check Us Out On Social Media!</strong>
          </div>
          <Icons>
            <FaFacebookSquare />
            <FaLinkedin />
            <FaInstagram />
            <SiTiktok />
          </Icons>
        </SocialMedia>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 20vh;
  font-size: 10px;
  margin-top: 10vh;
  margin-bottom: 0px;
  /* background-color: lightgrey; */
`;

const Horizontal = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
`;

const Contact = styled.div``;

const Links = styled.div``;

const Support = styled.div``;

const SocialMedia = styled.div`
  margin-top: 5px;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icons = styled.div`
  margin-top: 5px;
  font-size: 15px;
  width: 60px;
  display: flex;
  justify-content: space-between;
`;

export default Footer;
