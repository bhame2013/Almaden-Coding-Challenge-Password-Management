import { ContextMenu, MenuItem } from "react-contextmenu"

import { IPassword } from "src/services/password"

import { CopyInformation } from "./copy-information"
import { ChangePasswordFolder } from "./change-password-folder"
import { ButtonEditPassword } from "../edit-password-button"
import { ButtonClonePassword } from "../clone-password-button"
import { ButtonDeletePassword } from "../delete-password-button"

import * as S from "./styles"

interface ContextMenuComponentProps {
  triggerContextMenuId: string
  password: IPassword
}

export function ContextMenuComponent({
  password,
  triggerContextMenuId,
}: ContextMenuComponentProps) {
  return (
    <S.ContextMenuComponent>
      <ContextMenu id={triggerContextMenuId}>
        <MenuItem>
          <ButtonEditPassword password={password} text="Editar" />
        </MenuItem>

        <MenuItem>
          <ButtonDeletePassword password={password} text="Excluir" />
        </MenuItem>

        <MenuItem>
          <ButtonClonePassword password={password} text="Clonar" />
        </MenuItem>
        
        <hr />
        
        <MenuItem>
          <ChangePasswordFolder password={password}/>
        </MenuItem>

        <hr />

        <MenuItem>
          <CopyInformation
            text="Copiar nome de usuário"
            information={password.nameUser}
          />
        </MenuItem>

        <MenuItem>
          <CopyInformation
            text="Copiar senha"
            information={password.password}
          />
        </MenuItem>

        <MenuItem>
          <CopyInformation text="Copiar URL" information={password.url} />
        </MenuItem>

        <hr />

        <MenuItem>
          <a href={password.url.includes("https") ? password.url : "https://" + password.url} target="_blanck">
            Ir para URL
          </a>
        </MenuItem>
      </ContextMenu>
    </S.ContextMenuComponent>
  )
}
