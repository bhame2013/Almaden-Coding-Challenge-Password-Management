import { mutate } from "swr"

import { ClonePassword, IPassword } from "src/services/password"

interface ButtonClonePasswordProps {
  password: IPassword;
  text?: string;
}

export function ButtonClonePassword({ password, text }: ButtonClonePasswordProps) {
  
  async function HandleClone() {
    await ClonePassword(password)

    mutate("/passwords")
    mutate("/folders")
  }

  return (
    <button type="button" aria-label="Clone password" onClick={HandleClone}>
      <img src="/images/icons/clone.png" alt="Clone Icon" />

      {text && text}
    </button>
  );
}
