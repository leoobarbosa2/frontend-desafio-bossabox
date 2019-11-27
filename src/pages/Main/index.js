import React, { useState, useEffect } from 'react';

import { Container, ToolList, Options } from './styles';

import ModalAdd from '../../components/ModalAdd';

import api from '../../services/api';

export default function Main() {
  const [tools, setTools] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function getTools() {
      const response = await api.get('tools');

      setTools(response.data);
    }
    getTools();
  }, []);

  return (
    <>
      <Container>
        <Options>
          <input type="search" />
          <button onClick={() => setModal(true)} type="button">
            + Add
          </button>
        </Options>
        <ToolList>
          {tools.map(tool => (
            <li key={tool._id}>
              <div>
                <a href={tool.link}>{tool.title}</a>
                <p>{tool.description}</p>
                <span>{tool.tags}</span>
              </div>
              <div>
                <button type="button">Excluir</button>
              </div>
            </li>
          ))}
        </ToolList>
      </Container>
      {modal && (
        <ModalAdd>
          <form>
            <label htmlFor="">Tool Name</label>
            <input type="text" />
            <label htmlFor="">Tool link</label>
            <input type="text" />
            <label htmlFor="">Tool description</label>
            <input type="text" />
            <label htmlFor="">Tags</label>
            <input type="text" />
          </form>
          <div>
            <button>Add tool</button>
          </div>
        </ModalAdd>
      )}
    </>
  );
}
