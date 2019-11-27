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

export const Actions = styled.div`
  background: #fff;
  padding: 20px;

  h1 {
    font-size: 25px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }

  div {
    display: flex;
    justify-content: space-between;

    button {
      background: none;
      border: 2px solid rgba(0, 0, 0, 0.7);
      padding: 4px;

      cursor: pointer;
    }
  }
`;
