import React, { useState } from "react";
import styled from "styled-components";

export const Card = (props) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(0);
  //const [error, setError] = useState();

  const addMovieHandler = (e) => {
    e.preventDefault();
    //if (title.trim().length === 0 || image.trim().length) {
    //  setError({
    //    title: "Invalid input",
    //    message: "Please enter a valid name and image adress films",
    //  });
    //  return;
    //}
    //if (+rating > 5) {
    //    setError({
    //      title: "Invalid rating",
    //      message: "Please enter a valid rating (0-5.",
    //    });
    //    return;
    //  }
      props.onAddNewMovies(title, image, rating);
      setTitle('')
      setImage('')
      setRating('')
      props.onConfirm()
      
  };
  const getTitleValue = (e) => {

    setTitle(e.target.value);
  };
  const getImageValue = (e) => {
    setImage(e.target.value);
  };
  const getRatingValue = (e) => {
    setRating(e.target.value);
  };




  return (
    <>
      
      <FormBlock type='submit'  action='' >
        <Container>
          <label htmlFor="title"> Movie Title </label>
          <input
            value={title}
            onChange={getTitleValue}
            type="text"
            id="title"
          />

          <label htmlFor="image"> Image URL </label>
          <input
            value={image}
            onChange={
              getImageValue ||
              "https://www.behance.net/gallery/99322159/Short-Film-Posters"
            }
            type="text"
            id="image"
          />

          <label htmlFor="rating"> Your Rating </label>
          <input
            value={rating}
            onChange={getRatingValue}
            type="text"
            id="rating"
          />
        </Container>
        <div>
          <ButtonNo onClick={props.onCancelModal}> Cancel </ButtonNo>
          <ButtonYes onClick={addMovieHandler}  >Add </ButtonYes>
        </div>
      </FormBlock>
    </>
  );
};

const FormBlock = styled.div`
  width: 650px;
  height: 450px;
  border: 2px solid blue;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  & div {
    display: flex;
    justify-content: end;
    margin: 40px -40px 40px;
  }
`;
const Container = styled.form`
  flex-direction: column;
  /*width: 500px;*/

  & input {
    width: 550px;
    height: 30px;
    font-size: 20px;
    font-weight: 600;
  }

  & input:hover {
    background-color: #f0f0a9;
  }

  & label {
    display: flex;
    font-size: 20px;
    font-weight: 700;
    margin: 10px auto;
  }
`;

const ButtonNo = styled.button`
  width: 100px;
  background-color: #3bbeea;
  margin: 50px 30px;
  font-size: 20px;
  border-radius: 2px solid;
  cursor: pointer;
  padding: 5px;
  color: white;
  border-radius: 7px;
`;
const ButtonYes = styled.button`
  width: 100px;
  background-color: #020f9d;
  margin: 50px 30px;
  font-size: 20px;
  border-radius: 2px solid;
  cursor: pointer;
  padding: 5px;
  color: white;
  border-radius: 7px;
`;
