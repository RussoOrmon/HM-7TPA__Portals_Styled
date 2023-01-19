import React from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

import CardDelete from "./CardDelete";

const ModalDelete = ({onConfirm, onCancelModal, children, id}) => {  
  return (
    <>
      {createPortal(
        <>
        <BackdropStyle onClick={onCancelModal} />
          <CardDelete id={id} onConfirm={onConfirm} onCancelModal={onCancelModal} > 
            {children}
           </CardDelete>
        </>,
        document.getElementById("backdrop")
      )}
    </>
  );
};



export default ModalDelete;

const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  /*z-index: 990;*/
`;
