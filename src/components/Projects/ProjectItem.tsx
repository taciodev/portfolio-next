import Link from 'next/link';
import React from 'react';

import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjectContainer } from './styles';

type ProjectProps = {
  title: string;
  type: string;
  slug: string;
  img: string;
};

function ProjectItem({ title, type, slug, img }: ProjectProps) {
  return (
    <ProjectContainer imgUrl={img}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>#{title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/projetos/${slug}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectContainer>
  );
}

export default ProjectItem;
