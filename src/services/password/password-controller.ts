import { IFolderServer } from "src/contexts/PasswordContext/interfaces";
import {
  IReturnPasswordList,
  ICreateNewPassword,
  IFolderResponse,
  IPassword,
} from "./interfaces";

import { api } from "../api";
import { FolderApi } from "./folder-service";
import { Folder } from "components/data";
import { PasswordApi } from "./password-service";

//utils-region
function FilterPasswords(passwords: IPassword[], search) {
  return passwords.filter((password) => {
    const filteredPassword = Object.values(password).filter((atr) =>
      String(atr).toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );

    if (filteredPassword.length > 0) {
      return password;
    }
  });
}

function AddPasswordsInsideFolder(
  folders: IFolderServer[],
  passwords: IPassword[]
) {
  if (!folders || !passwords) {
    return {};
  }

  return passwords.reduce(function (reducer, item) {
    const nameFolder = folders.find(
      (folder) => Number(folder.id) === Number(item["folderId"])
    )?.nome;

    if (nameFolder) {
      (reducer[nameFolder] = reducer[nameFolder] || []).push(item);
      return reducer;
    }

    return {};
  }, {});
}

function GetFolderName(folders, nameFolder) {
  return (
    folders.find((f) => String(f.id) === nameFolder || f.nome === nameFolder)?.nome || "none"
  );
}

//actions-region
async function GetFolders() {
  const folderApiInstance = new FolderApi();

  return folderApiInstance.getFolders();
}

async function CreateNewPassword(
  data: ICreateNewPassword,
  folders: IFolderServer[]
) {
  try {
    const { createFolder } = new FolderApi();
    const { createPassword } = new PasswordApi();

    const ExistFolderId = folders.find(
      (folder) => String(folder.id) === data.folder
    );

    if (ExistFolderId) {
      await createPassword({
        ...data,
        folder: GetFolderName(folders, data.folder),
        folderId: String(ExistFolderId.id),
      });
      return;
    }

    if (data.folder) {
      const newPaste = await createFolder(data.folder);

      await createPassword({
        ...data,
        folderId: String(newPaste.id),
      });

      return;
    }

    await createPassword({ ...data, folderId: "1" });
  } catch (e) {
    throw "Desculpe, ocorreu um erro inesperado!";
  }
}

async function DeletePassword(
  password: IPassword,
  passwords: IReturnPasswordList,
  folders: IFolderServer[]
) {
  try {
    const { deleteFolder } = new FolderApi();
    const { deletePassword } = new PasswordApi();

    const getFolderData = folders.find(
      ({ id }) => String(id) === String(password.folderId)
    );

    if (getFolderData && password.id) {
      const numberPasswordsInsideFolder = passwords[getFolderData.nome].length;

      if (numberPasswordsInsideFolder === 1) {
        await deletePassword(password.id);
        await deleteFolder(password.folderId);

        return;
      }

      await deletePassword(password.id);
    }
  } catch (e) {
    throw e;
  }
}

async function EditPassword(
  password: IPassword,
  passwords: IReturnPasswordList,
  folders: IFolderServer[]
) {
  try {
    const { updatePassword } = new PasswordApi();
    const { createFolder, deleteFolder } = new FolderApi();

    const folderExistInAtualContext = folders.find(folder => folder.nome === password.folder || String(folder.id) === password.folder);

    const atualFolderInformations = folders.find(folder => String(folder.id) === password.folderId) as IFolderServer;

    const numberItemsInsideAtualFolder = passwords[atualFolderInformations.nome].length;

    if (folderExistInAtualContext) {
      if (password.folderId !== String(folderExistInAtualContext.id)) {
        
        await updatePassword({
          ...password,
          folder: GetFolderName(folders, password.folder),
          folderId: String(folderExistInAtualContext.id),
        });

        if (numberItemsInsideAtualFolder === 1) {
          await deleteFolder(atualFolderInformations.id);
        }

        return;
      }

      await updatePassword({
        ...password,
        folder: GetFolderName(folders, password.folder),
      });

      return;
    }

    if (password.folder) {
      const newPaste = await createFolder(password.folder);

      await updatePassword({
        ...password,
        folderId: String(newPaste.id),
      });

      if (numberItemsInsideAtualFolder === 1) {
        await deleteFolder(atualFolderInformations.id);
      }

      return;
    }

    await updatePassword({ ...password, folderId: "1" });

    if (numberItemsInsideAtualFolder === 1) {
      await deleteFolder(atualFolderInformations.id);
    }
  } catch (e) {
    throw e;
  }
}

async function ClonePassword(password: IPassword) {
  try {
    const { createPassword } = new PasswordApi();
    return createPassword({ ...password, id: undefined });
  } catch (e) {
    throw e;
  }
}

export {
  GetFolders,
  EditPassword,
  ClonePassword,
  DeletePassword,
  FilterPasswords,
  CreateNewPassword,
  AddPasswordsInsideFolder,
};
