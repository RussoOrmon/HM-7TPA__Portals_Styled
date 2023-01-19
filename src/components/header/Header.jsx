import React, { useState } from "react";
import Button from "../UI/button/Button";
import "./header.scss";
import styled from "styled-components";
import Modal from "../UI/Modal";

const Container = styled.div`
  background-color: rgb(3, 3, 184);
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
`;
const Nav = styled.div`
  color: white;
  font-size: 30px;
  margin: 5px 20px;
  font-weight: bold;
`;

const Header = ({onAddNewMovies}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModalVisible = () => {
    setModalVisible(prevState => !prevState);
  };

  const confirmModalHandler = () => {

    setModalVisible(false);
  };

  return (
    <>
      {isModalVisible ? (
        <Modal
        onAddNewMovies={onAddNewMovies}
          onConfirm={confirmModalHandler}
          onCancelModal={toggleModalVisible}
        />
      ) : (
        ""
      )}
      <Container className="header">
        <Nav className="nav"> Favorite Movies </Nav>
        <Button
          onClick={toggleModalVisible}
          children="ADD MOVIE"
          className="btn addNav "
        />
      </Container>
    </>
  );
};

export default Header;
