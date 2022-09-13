import { IPassword } from "src/services/password"

import { CardPassword } from "../card-password"

import * as S from "./styles"

interface FolderProps {
  title: string
  passwords: IPassword[]
}

export function Folder({ title, passwords }: FolderProps) {
  return (
    <S.Folder>
      <h4>
       <span>{title === "none" ? "(none)" : title} </span> ({passwords.length})
      </h4>

      <div className="list-passwords">
        {passwords.map((password) => (
          <CardPassword key={password.id + password.name} password={password} />
        ))}
      </div>
    </S.Folder>
  )
}
