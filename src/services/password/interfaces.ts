interface ICreateNewPassword {
  url: string;
  name: string;
  nameUser: string;
  folder: string;
  password: string;
}

interface IFolderResponse {
  id: number;
}

interface IPassword {
  url: string;
  name: string;
  nameUser: string;
  folder: string;
  password: string;
  folderId: string;
  id?: number;
}

interface IReturnPasswordList {
  [key: string]: IPassword[];
}

export type { ICreateNewPassword, IFolderResponse, IReturnPasswordList, IPassword };
