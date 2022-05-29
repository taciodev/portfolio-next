import { ItemContainer } from './styles';

type ExperienciaProps = {
  year: string;
  title: string;
  description: string;
};

export default function ExperienceCards({
  year,
  title,
  description
}: ExperienciaProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
