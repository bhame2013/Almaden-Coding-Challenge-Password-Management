import { Dispatch, SetStateAction } from "react";

import { IReturnPasswordList } from "src/services/password/interfaces";

interface IFolderServer {
  id: number;
  nome: string;
}

interface ContextPassword {
  folders: IFolderServer[];
  passwords: IReturnPasswordList;
  setSearch?: Dispatch<SetStateAction<string>>;
}

export type { ContextPassword, IFolderServer };
