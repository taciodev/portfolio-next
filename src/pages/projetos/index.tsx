import Header from '../../components/Header';
import ProjectItem from '../../components/Item';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

export default function Projetos() {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="projetos"
          imgUrl="https://blog.nubank.com.br/wp-content/uploads/2018/11/nubank_oque-mudou-app.png"
        />
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="projetos"
          imgUrl="https://blog.nubank.com.br/wp-content/uploads/2018/11/nubank_oque-mudou-app.png"
        />
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="projetos"
          imgUrl="https://blog.nubank.com.br/wp-content/uploads/2018/11/nubank_oque-mudou-app.png"
        />
      </main>
    </ProjectsContainer>
  );
}
