import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

type Props = {
  title: string;
  path: string;
};

export default function NavLink({ title, path }: Props) {
  const router = useRouter();

  const isActive: boolean = router.pathname === path;

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
}
