import React from 'react';

import { Container, ToolList, Options } from './styles';

export default function Main() {
  return (
    <Container>
      <Options>
        <input type="search" />
        <a href="/tools">+ Add</a>
      </Options>
      <ToolList>
        <li>
          <div>
            <a href="https://google.com">express</a>
            <p>Fast, unopinionated, minimalist web framework for node.</p>
            <span>node server microframework</span>
          </div>
          <div>
            <button type="button">Excluir</button>
          </div>
        </li>
      </ToolList>
    </Container>
  );
}
