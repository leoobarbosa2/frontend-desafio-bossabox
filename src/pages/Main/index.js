import React, { useState, useEffect } from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Container, ToolList, Options, ModalBody, Modal } from './styles';

import api from '../../services/api';

export default function Main() {
  const [tools, setTools] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function getTools() {
      const response = await api.get('/tools');

      setTools(response.data);
    }
    getTools();
  }, []);

  async function handleSubmit({ title, link, description, tags }) {
    try {
      await api.post('/tools', {
        title,
        link,
        description,
        tags,
      });
    } catch (err) {
      console.log(err);
    }
  }

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
      <ModalBody visible={modal}>
        <Modal>
          <button type="button" onClick={() => setModal(false)}>
            X
          </button>
          <h1>+ Add new Tool</h1>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="">Tool Name</label>
            <Input name="title" />
            <label htmlFor="">Tool link</label>
            <Input name="link" />
            <label htmlFor="">Tool description</label>
            <Input name="description" />
            <label htmlFor="">Tags</label>
            <Input name="tags" />
            <div>
              <button type="submit">Add tool</button>
            </div>
          </Form>
        </Modal>
      </ModalBody>
    </>
  );
}
