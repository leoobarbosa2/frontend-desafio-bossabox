import React from 'react';

import { Container, Modal } from './styles';

export default function ModalAdd({ children }) {
  return (
    <Container>
      <Modal>{children}</Modal>
    </Container>
  );
}
