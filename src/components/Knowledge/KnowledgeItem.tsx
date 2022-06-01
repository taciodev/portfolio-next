import React from 'react';
import { KnowledgeContainer } from './styles';

type KnowledgeProps = {
  title: string;
  icon: React.ReactNode;
};

export default function KnowledgeItem({ title, icon }: KnowledgeProps) {
  return (
    <KnowledgeContainer>
      <p>{title}</p>
      {icon}
    </KnowledgeContainer>
  );
}
