import React from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { Card } from "../Card";

const Modal = ({ onAddNewMovies, onCancelModal, onConfirm, children}) => {  
  
  return (
    <>
      {createPortal(
        <>
        <BackdropStyle onClick={onCancelModal} />
          <Card onAddNewMovies={onAddNewMovies} onConfirm={onConfirm} onCancelModal={onCancelModal} > {children} </Card>
        </>,
        document.getElementById("backdrop")
      )}
    </>
  );
};



export default Modal;

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  /*z-index: 990;*/
`;
