import React, { useState, useEffect } from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Container, ToolList, Options, ModalBody, Modal } from './styles';

import ActionConfirm from '../../components/ActionConfirm';

import api from '../../services/api';

export default function Main() {
  const [tools, setTools] = useState([]);
  const [modal, setModal] = useState(false);
  const [action, setAction] = useState(false);
  const [targetTool, setTargetTool] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getTools() {
      setLoading(true);
      const response = await api.get('/tools');

      const data = response.data.map(tool => ({
        ...tool,
        tagsFormatted: tool.tags.map(tag => `#`.concat(tag).concat(' ')),
      }));

      setTools(data);
      setLoading(false);
    }
    getTools();
  }, []);

  async function handleSubmit({ title, link, description, tags }) {
    try {
      await api.post('/tools', {
        title,
        link,
        description,
        tags: tags.split(' '),
      });

      const newToolState = await api.get('tools');

      setTools(newToolState.data);

      setModal(false);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteTool(id) {
    try {
      await api.delete(`/tools/${id}`);

      const updatedTools = tools.filter(tool => tool._id !== id);

      setTools(updatedTools);
      setAction(false);
      setTargetTool('');
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSearch(e) {
    const search = e.target.value;
    setInputValue(search);

    if (search.lenght === 0) {
      const searchTools = await api.get(`/tools?tag=${search}`);

      const data = searchTools.data.map(tool => ({
        ...tool,
        tagsFormatted: tool.tags.map(tag => `#`.concat(tag).concat(' ')),
      }));

      setTools(data);
    }

    const searchTools = await api.get(`/tools?tag=${search}`);

    const data = searchTools.data.map(tool => ({
      ...tool,
      tagsFormatted: tool.tags.map(tag => `#`.concat(tag).concat(' ')),
    }));

    setTools(data);
  }

  return (
    <>
      <Container>
        <Options>
          <input
            value={inputValue}
            onChange={handleSearch}
            placeholder="Search by tag"
            type="search"
          />
          <button onClick={() => setModal(true)} type="button">
            + Add
          </button>
        </Options>
        <ToolList>
          {loading && <div>Loading ...</div>}
          {tools.map(tool => (
            <li key={tool._id}>
              <div>
                <a href={tool.link}>{tool.title}</a>
                <p>{tool.description}</p>
                <span>{tool.tagsFormatted}</span>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setAction(true);
                    setTargetTool(tool._id);
                  }}
                >
                  Excluir
                </button>
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
            <Input name="title" placeholder="Tool Title" />
            <label htmlFor="">Tool link</label>
            <Input name="link" placeholder="Tool link page" />
            <label htmlFor="">Tool description</label>
            <Input name="description" placeholder="Tool description: min 10 " />
            <label htmlFor="">Tags</label>
            <Input name="tags" placeholder="Tool tags" />
            <div>
              <button type="submit">Add tool</button>
            </div>
          </Form>
        </Modal>
      </ModalBody>
      {action && (
        <ActionConfirm>
          <h1> X Remove tool</h1>
          <p>Are you sure you want to remove this tool?</p>
          <div>
            <button type="button" onClick={() => setAction(false)}>
              Cancel
            </button>
            <button type="button" onClick={() => handleDeleteTool(targetTool)}>
              Yes, Delete
            </button>
          </div>
        </ActionConfirm>
      )}
    </>
  );
}
