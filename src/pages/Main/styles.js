import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 700px;
  margin: 0 auto;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    background: #fff;
    padding: 2px;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ToolList = styled.ul`
  margin-top: 20px;
  list-style: none;

  li {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    border: 3px solid rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 4px;

    div {
      display: flex;
      flex-direction: column;

      a {
        text-decoration: none;
      }

      p {
        margin-top: 10px;
      }

      span {
        display: block;
        margin-top: 10px;
        font-weight: bold;
      }
    }

    button {
      cursor: pointer;
      background: none;
      border: 0;
      color: #f00;
    }
  }
`;
