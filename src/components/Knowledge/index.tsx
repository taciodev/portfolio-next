import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoJavascript } from 'react-icons/io';

import React from 'react';

import { Container } from './styles';

import SectionTitle from '../SectionTitle';
import KnowledgeItem from './KnowledgeItem';

function Knowledge() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <KnowledgeItem title="HTML" icon={<AiFillHtml5 />} />
        <KnowledgeItem title="CSS" icon={<FaCss3Alt />} />
        <KnowledgeItem title="JavaScript" icon={<IoLogoJavascript />} />
        <KnowledgeItem title="React" icon={<FaReact />} />
      </section>
    </Container>
  );
}

export default Knowledge;
