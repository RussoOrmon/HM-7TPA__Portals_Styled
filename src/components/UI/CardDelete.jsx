import React from 'react'
import styled from 'styled-components'

const CardDelete = ({onConfirm ,onCancelModal, id}) => {
  return (
    <Container  >
            <h3> Are you sure you wanna delete ? </h3>
            <div>
            <button onClick={onCancelModal} className='btnNo' > No  </button>
            <button onClick={onConfirm} className='btnYes' > Yes  </button>
            </div>

    </Container>
  )
}

export default CardDelete

const Container= styled.div`
  width: 650px;
  height: 200px;
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


  & div{
    margin: 40px -10px 20px auto;

  }

  & button{
    margin: auto 30px;
    color: blue;
    font-size: 16px;
    padding: 5px;
    border-radius: 5px;
  }

  & .btnNo{
    width: 50px;
    cursor: pointer;
  }
  & .btnYes{
    width: 70px;
    background-color: blue;
    color: white;
    cursor: pointer;
  }


`