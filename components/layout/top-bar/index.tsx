import Link from "next/link";

import { Search } from 'components/data'

import * as S from "./styles";

export function TopBar() {
  return (
    <S.TopBar>
      <Link href="/" passHref>
        <a href="replaced" className="logo">
          Almaden...
        </a>
      </Link>

      <Search />
    </S.TopBar>
  );
}
