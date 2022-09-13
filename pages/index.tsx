import { usePassword } from "src/contexts/PasswordContext"

import { Layout } from "components/layout"
import { AddNewPassword, Folder } from "components/data"

 export default function HomePage() {
  const { passwords } = usePassword();

  return (
    <Layout>
        <h2>Todos os itens</h2>

        {passwords &&
          Object.keys(passwords).map((password, index) => (
            <Folder
              key={password + index}
              title={password}
              passwords={passwords[password]}
            />
          ))}

        {Object.keys(passwords).length === 0 && (
          <p>Nenhuma senha por aqui.</p>
        )}
        <AddNewPassword />
    </Layout>
  );
}
