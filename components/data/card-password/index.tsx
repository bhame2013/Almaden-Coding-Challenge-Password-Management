import { ContextMenuTrigger } from "react-contextmenu"

import { IPassword } from "src/services/password"

import { ButtonEditPassword, ButtonDeletePassword, ContextMenuComponent } from "./components-card"

import * as S from "./styles"

interface PasswordCardProps {
  password: IPassword;
}

export function CardPassword({ password }: PasswordCardProps) {
  const triggerContextMenuId = "contextPasswordCard" + password.id + password.folderId;

  return (
    <>
      <ContextMenuTrigger id={triggerContextMenuId}>
        <S.PasswordCard>
          <div className="image">
            <div className="default">
              <span></span>
            </div>

            <div className="image--hover-container">
              <a href={password.url.includes("https") ? password.url : "https://" + password.url} target="_blanck">
                  Iniciar
               </a>
            </div>
          </div>

          <div className="text">
            <div className="title-text">
              <span className="name-password">{password.name}</span>
            
              <span className="name-user-password">
                {password.nameUser}  
              </span>
            </div>
         

            <div className="actions">
              <ButtonEditPassword password={password} />

              <ButtonDeletePassword password={password} />
            </div>
          </div>
        </S.PasswordCard>
      </ContextMenuTrigger>

      <ContextMenuComponent password={password} triggerContextMenuId={triggerContextMenuId} />
    </>
  )
}
