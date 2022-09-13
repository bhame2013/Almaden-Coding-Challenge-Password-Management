import { IFolderServer } from "src/contexts/PasswordContext/interfaces";
import { api } from "../api";
import { IFolderResponse } from "./interfaces";

export class FolderApi {
  private static instance: FolderApi;

  public static getInstance(): FolderApi {
    if (!FolderApi.instance) {
      FolderApi.instance = new FolderApi();
    }
    return FolderApi.instance;
  }

  async getFolders() {
    try {
      const { data } = await api.get<IFolderServer[]>("/folders");

      return data;
    } catch (e) {
      throw e;
    }
  }

  async createFolder(nameFolder: string) {
    try {
      const { data } = await api.post<IFolderResponse>("/folders", {
        nome: nameFolder,
      });

      return data;
    } catch (e) {
      throw e;
    }
  }

  async deleteFolder(id: number | string) {
    if (!(String(id) === "1" && id)) {
      await api.delete("/folders/" + id);
    }
  }
}
