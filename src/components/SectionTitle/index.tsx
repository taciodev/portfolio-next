import React from 'react';
import { Container } from './styles';

interface SectionTitleProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
}

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <Container>
      <h1>#{title}</h1>
      {description && <h2>{description}</h2>}
    </Container>
  );
}

export default SectionTitle;
