import {
  useState,
  ReactNode,
  useContext,
  useCallback,
  createContext,
} from "react";
import useSWR from "swr";

import {
  AddPasswordsInsideFolder,
  FilterPasswords,
} from "src/services/password";
import { ContextPassword } from "./interfaces";
import { FolderApi } from "src/services/password/folder-service";
import { PasswordApi } from "src/services/password/password-service";

const PasswordContext = createContext<ContextPassword>({
  folders: [],
  passwords: {},
  setSearch: () => null,
});

const usePasswordController = (search: string): ContextPassword => {
  const GetFolders = async () => await new FolderApi().getFolders();
  const GetPasswords = async () => await new PasswordApi().getPasswords();

  const responseFolders = useSWR("/folders", GetFolders);
  const responsePasswords = useSWR("/passwords", GetPasswords);

  if (!responseFolders.data || !responsePasswords.data) {
    return {
      folders: [],
      passwords: {},
    };
  }

  const passwordsFilteredBySearch = FilterPasswords(
    responsePasswords.data,
    search
  );

  const passwordListInsideFolders = AddPasswordsInsideFolder(
    responseFolders.data,
    passwordsFilteredBySearch
  );

  return {
    folders: responseFolders.data,
    passwords: passwordListInsideFolders,
  };
};

function PasswordProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState("");

  const PasswordContextCallBack = useCallback(() => {
    return usePasswordController(search);
  }, [search]);

  const passwordContextValue = PasswordContextCallBack();

  return (
    <PasswordContext.Provider value={{ ...passwordContextValue, setSearch }}>
      {children}
    </PasswordContext.Provider>
  );
}

function usePassword() {
  const context = useContext(PasswordContext);

  if (context === undefined) {
    throw new Error("usePassword() must be used within a PasswordProvider");
  }
  return context;
}

export { PasswordProvider, usePassword };
