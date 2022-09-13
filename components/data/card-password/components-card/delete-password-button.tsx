import { mutate } from "swr"

import { usePassword } from "src/contexts/PasswordContext"
import { DeletePassword, IPassword } from "src/services/password"

interface ButtonDeletePasswordProps {
  password: IPassword
  text?: string
}

export function ButtonDeletePassword({ password, text }: ButtonDeletePasswordProps) {
  const { passwords, folders } = usePassword()

  async function HandleDelete() {
    await DeletePassword(password, passwords, folders)

    mutate("/passwords")
    mutate("/folders")
  }

  return (
    <button type="button" aria-label="delete password" onClick={HandleDelete}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <g>
          <g>
            <g></g>
            <g>
              <path d="M13 2v2H7V2zm-2 13h2V9h-2zm-4 0h2V9H7zm9 3H4V6h12zM15 1a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H0v2h2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6h2V4h-5z"></path>
            </g>
          </g>
        </g>
      </svg>

      {text && text}
    </button>
  )
}
