import Link from "next/link";
import { useRouter } from "next/router";

import { Navigation } from "./navigation-data";

import * as S from "./styles";

export function Header() {
  const router = useRouter();

  return (
    <S.Header>
      {Navigation && (
        <ul>
          {Navigation.map(({ id, url, text, icon }) => (
            <li key={id}>
              <Link href={url} passHref>
                <a href="replaced" className={router.pathname === url ? "active" : ""}>
                  <i
                    dangerouslySetInnerHTML={{
                      __html: icon,
                    }}
                  ></i>

                  {text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </S.Header>
  );
}
