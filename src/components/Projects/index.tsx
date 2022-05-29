import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

function Projects() {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" />

      <section>
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="projetos"
          img="https://blog.nubank.com.br/wp-content/uploads/2018/11/nubank_oque-mudou-app.png"
        />
        <ProjectItem
          title="Projeto 02"
          type="Website"
          slug="projetos"
          img="https://blog.nubank.com.br/wp-content/uploads/2018/11/nubank_oque-mudou-app.png"
        />
        <ProjectItem
          title="Projeto 03"
          type="Website"
          slug="projetos"
          img="https://blog.nubank.com.br/wp-content/uploads/2018/11/nubank_oque-mudou-app.png"
        />
        <ProjectItem
          title="Projeto 04"
          type="Website"
          slug="projetos"
          img="https://blog.nubank.com.br/wp-content/uploads/2018/11/nubank_oque-mudou-app.png"
        />
      </section>

      <button type="button">
        <a href="/projetos">Ver todos os projetos</a>
      </button>
    </Container>
  );
}
export default Projects;
