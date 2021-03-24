import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ButtonHome } from "./ButtonHome";
import { FaTimes } from "react-icons/fa";

const DropDownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: black;
  //   no-repeat center center;
  // -webkit-background-size: cover;
  // -moz-background-size: cover;
  // -o-background-size: cover;
  // background-size: cover;
  display: grid;
  align-items: center;
  //   top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
const DropDownWrapper = styled.div``;
const DropDownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  } ;
`;
const DropDownLink = styled(Link)`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: red;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 230px;
`;

const DropDown = ({ isOpen, toggle }) => {
  return (
    <div>
      <DropDownContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <DropDownWrapper>
          <h1
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Mt Electronics
          </h1>
          <DropDownMenu>
            <DropDownLink to="/">Home</DropDownLink>
            <DropDownLink to="/login">Login</DropDownLink>
            <DropDownLink to="/register">Register</DropDownLink>
            <DropDownLink to="/devis">Demande de devis</DropDownLink>
          </DropDownMenu>
          <BtnWrap>
            <ButtonHome primary="true" round="true" big="true" to="/contact">
              Contact Us
            </ButtonHome>
          </BtnWrap>
        </DropDownWrapper>
      </DropDownContainer>
    </div>
  );
};

export default DropDown;
