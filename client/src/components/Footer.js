import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <Trial>
        <Container>
          <Horizontal>
            <Support>
              <strong>Help and Support:</strong>
              <div>FAQ</div>
              <NurseryLink to="/nurseryFinder">
                Find a plant nursery near you
              </NurseryLink>
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
              <div>Address: 1221 Rue Tulipe, Montreal, QC, Canada T0L1P3</div>
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
      </Trial>
    </>
  );
};

const Trial = styled.div``;

const Container = styled.div`
  bottom: 2px;
  width: 98vw;
  height: 16vh;
  font-size: 10px;
  margin-top: 1vh;
  margin-bottom: 2px;
  margin-left: -4px;
  background-color: lightgrey;
`;

const Horizontal = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
`;

const Contact = styled.div``;

const NurseryLink = styled(Link)`
  color: black;
  text-decoration: none;
  :visited {
    color: black;
  }
`;

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
