import { Header } from "./header";
import { TopBar } from "./top-bar";

import * as S from "./styles";

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <S.Layout>
      <Header />

      <div className="content">
        <TopBar />

        <div className="container">{children}</div>
      </div>
    </S.Layout>
  );
}
