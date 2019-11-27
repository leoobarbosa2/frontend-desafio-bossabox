import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background: #fff;
  min-width: 400px;
  height: 500px;
  padding: 30px;

  form {
    display: flex;
    flex-direction: column;
  }

  div {
    button {
      margin-top: 20px;
      float: right;
    }
  }
`;
