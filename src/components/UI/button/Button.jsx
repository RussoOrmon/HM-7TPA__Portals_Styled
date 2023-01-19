import React from "react";
import "./button.scss";
import styled from "styled-components";



const Button = ({ onClick, className, color, children, rating, title }) => {

  

  const colorButton = { backgroundColor: color };
  return (
    <ButtonStyled onClick={onClick} className={className} style={colorButton}
    >
      {rating} {children}
      {title}
    </ButtonStyled>
  );
};

export default Button;



const ButtonStyled = styled.button`
  width: 200px;
  height: 40px;
  margin: 0 20px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;