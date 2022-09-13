import { useRef, useState, Dispatch, SetStateAction } from "react";
import { useSWRConfig } from "swr";

import {
  IPassword,
  ICreateNewPassword,
} from "src/services/password/interfaces";

import { EditPassword, CreateNewPassword } from "src/services/password";

import { usePassword } from "src/contexts/PasswordContext";

import {
  Form as Unform,
  Input,
  Select,
  FormHandles,
  YupValidation,
  InputPassword,
} from "components/inputs";
import { LoaderCircle } from "components/data";

import * as S from "./styles";

interface FormAddNewPasswordProps {
  setStateModal: Dispatch<SetStateAction<boolean>>;
  initialStateForm?: IPassword;
}

export function Form({
  setStateModal,
  initialStateForm,
}: FormAddNewPasswordProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { mutate } = useSWRConfig();
  const { folders, passwords } = usePassword();

  const formRef = useRef<FormHandles>(null);

  //Yup letra minuscula
  //Finally
  //bloquear o envio fazendo uma verificacao

  async function HandleSubmit(data: ICreateNewPassword) {
    if (loading) {
      return;
    }

    const yup = await import("yup");

    try {
      setError("");
      setLoading(true);

      const schema = yup.object().shape({
        url: yup.string().required("Por favor, insira uma url."),
        name: yup.string().required("Por favor, insira um nome."),
        nameUser: yup
          .string()
          .required("Por favor, insira um nome de usuário."),
        folder: yup.string(),
        password: yup.string().required("Por favor, insira uma senha."),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      formRef.current?.setErrors({});

      if (initialStateForm) {
        const updatedPassword = {
          url: data.url,
          name: data.name,
          nameUser: data.nameUser,
          folder: data.folder,
          password: data.password,
          folderId: initialStateForm.folderId,
          id: initialStateForm.id,
        };

        await EditPassword(updatedPassword, passwords, folders);
      } else {
        await CreateNewPassword(data, folders);
      }

      mutate("/folders");
      mutate("/passwords");

      setLoading(false);
      setStateModal(false);
    } catch (err) {
      setLoading(false);

      const yupError = err instanceof yup.ValidationError;

      if (err && !yupError && typeof err === "string") {
        setError(err);
        return;
      }

      YupValidation(yup, err, formRef);
    }
  }

  return (
    <S.FormAddNewPassword>
      <Unform
        ref={formRef}
        onSubmit={HandleSubmit}
        initialData={initialStateForm}
      >
        {error && <p className="error-message">{error}</p>}

        <Input name="url" label="URL:" />

        <div className="double-column">
          <Input name="name" label="Nome:" />

          <Select
            label="Pasta:"
            name="folder"
            options={folders.map((folder) => ({
              label: folder.nome,
              value: String(folder.id),
            }))}
          />
        </div>

        <div className="double-column">
          <Input name="nameUser" label="Nome de usuário:" />

          <InputPassword name="password" label="Senha do site:" />
        </div>

        <div className="action">
          <button
            type="button"
            className="button-cancel"
            disabled={loading}
            onClick={() => setStateModal(false)}
          >
            Cancelar
          </button>

          <button type="submit" className="button-submit" disabled={loading}>
            {loading ? <LoaderCircle size={20} color="#fff" /> : "Salvar"}
          </button>
        </div>
      </Unform>
    </S.FormAddNewPassword>
  );
}
