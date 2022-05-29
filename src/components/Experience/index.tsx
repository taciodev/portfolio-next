import SectionTitle from '../SectionTitle';
import ExperienceCards from './ExperienceCards';
import { Container } from './styles';

function Experience() {
  return (
    <Container>
      <SectionTitle title="65 Anos" description="de experiência" />

      <section>
        <ExperienceCards
          year="2018"
          title="Dev Front-end"
          description="Lorem ipsum dolor sdsadas it amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienceCards
          year="2019"
          title="Dev Front-end"
          description="Lorem ipsum sss dolor sit amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienceCards
          year="2021"
          title="Dev Front-end"
          description="Lorem idsadas psum dolor sit amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienceCards
          year="2022"
          title="Dev Front-end"
          description="Lorem ipsumdsada  dolor sit amet, consectetur adipiscing elit. Aliquam"
        />
      </section>
    </Container>
  );
}

export default Experience;
