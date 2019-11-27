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
  margin: 20px 0;
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

export const ModalBody = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  border: 3px solid #000;
  position: relative;
  background: #fff;
  min-width: 400px;
  padding: 30px;

  > h1 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  > button {
    position: absolute;
    padding: 4px;
    top: 0;
    right: 0;
    border: 0;
    background: none;

    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      padding: 4px;
      border: 1px solid rgba(0, 0, 0, 0.7);
    }

    label {
      margin: 20px 0;
    }

    div {
      button {
        background: #fff;
        border: 2px solid rgba(0, 0, 0, 0.7);
        padding: 2px;
        margin-top: 20px;
        float: right;

        cursor: pointer;
      }
    }
  }
`;
