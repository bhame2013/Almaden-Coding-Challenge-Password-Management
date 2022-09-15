import { api } from "../api";
import { IPassword } from "./interfaces";

export class PasswordApi {
  private static instance: PasswordApi;

  public static getInstance(): PasswordApi {
    if (!PasswordApi.instance) {
      PasswordApi.instance = new PasswordApi();
    }
    return PasswordApi.instance;
  }

  async getPasswords() {
    try {
      const { data } = await api.get<IPassword[]>("/passwords");

      return data;
    } catch (e) {
      throw e;
    }
  }

  async createPassword(password: IPassword) {
    try {
    const { data } = await api.post(`/passwords`, { ...password});

    return data
    }catch(e) {
      throw e;
    }
  }

  async deletePassword(id: string | number) {
    try {
      const { data } = await api.delete("/passwords/" + id);

      return data;
    } catch (e) {
      throw e;
    }
  }

  async updatePassword(password: IPassword) {
    try {
      console.log(password);

      const { data } = await api.put("passwords/" + password.id, {
        ...password,
      });

      return data;
    } catch (e) {
      throw e;
    }
  }
}
