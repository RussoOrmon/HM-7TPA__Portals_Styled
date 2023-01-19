import React, {useState} from "react";
import Button from "../UI/button/Button";
import "./mainContent.scss";
import { buttons } from "../../data";
import styled from "styled-components";
import ModalDelete from "../UI/ModalDelete";

export const MainContent = ({ movie, movies , setNewMovie }) => {
  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModalVisible = () => {
    setModalVisible(prevState => !prevState);
  };

  const confirmModalHandler = () => {
    setModalVisible(false);
  };

  const deleteMovie = (id) => {
    setNewMovie(movies.filter(elem=> elem.id !==movie.id))
    setModalVisible(false)
  };

  const button = buttons.map((button) => (
    <Button
      key={button.id}
      onClick={button.title === "DELETE" ? toggleModalVisible : null}
      title={button.title}
      color={button.color}
      rating={button.id === 1 ? movie.rating : ""}
      className="btn"
    />
  ));

  return (
    <>
{isModalVisible ? (
        <ModalDelete
          id={movie.id}
          onConfirm={deleteMovie}
          onCancelModal={confirmModalHandler}
        />
      ) : (
        ""
      )}
    <Container className="container">
      <MovieContainer
        //onClick={(id===movie.id) ? deleteMovie : null }
        className="movie-container"
        title={movie.title}
      >
        <Image className="image" src={movie.img} alt={movie.title} />
        <div>
          <div>
            <h3> {movie.title} </h3>
          </div>
          <ButtonBlock className="button-container">{button}</ButtonBlock>
        </div>
      </MovieContainer>
    </Container>

    </>

  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /*padding-left: 300px;*/
`;
const MovieContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 10px;
  border: 1px solid rgb(239, 229, 229);
  border-radius: 8px;
  box-shadow: 2px 2px 10px;
`;

const Image = styled.img`
  width: 250px;
  height: 200px;
  border-radius: 5px;
`;
const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-around;
  /*width: 350px;*/
  margin-top: 20px;
  font-size: 16px;
  color: rgb(10, 10, 10);
`;
