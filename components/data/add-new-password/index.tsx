import { useState } from "react"

import { Modal, Form } from "components/data"

import * as S from "./styles"

export function AddNewPassword() {
  const [stateModal, setStateModal] = useState(false)
  
  return (
    <>
      <Modal
        title="Adicionar senha"
        stateModal={stateModal}
        setStateModal={setStateModal}
      >
        <Form setStateModal={setStateModal}/>
      </Modal>

      <S.ButtonAddNewPassword type="button" aria-label="Adicionar nova senha" onClick={() => setStateModal(true)}>
        +
      </S.ButtonAddNewPassword>
    </>
  );
}
