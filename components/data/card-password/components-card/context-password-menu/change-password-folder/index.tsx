import { useSWRConfig } from "swr"

import { usePassword } from "src/contexts/PasswordContext"
import { EditPassword, IPassword } from "src/services/password"

import * as S from "./styles"

interface ChangePasswordFolderProps {
  password: IPassword;
}

export function ChangePasswordFolder({ password }: ChangePasswordFolderProps) {
  const { folders, passwords } = usePassword()
  const { mutate } = useSWRConfig()

  async function ChangeFolder(nome: string) {
    const updatePassword = {
      ...password,
      folder: nome,
    }

    await EditPassword(updatePassword, passwords, folders)

    mutate("/folders")
    mutate("/passwords")
  }

  return (
    <S.ChangePasswordFolder>
      <span>
        Mover para a pasta

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
       
        <div className="sub-menu">
          {folders.map(({ id, nome }) => {
            if (password.folderId === String(id)) {
              return;
            }

            return (
              <button
                key={"ChangePasswordFolderItem-" + id}
                aria-label={"trocar para a pasta" + nome}
                onClick={() => ChangeFolder(nome)}
              >
                {nome}
              </button>
            );
          })}
        </div>
      </span>
    </S.ChangePasswordFolder>
  );
}
