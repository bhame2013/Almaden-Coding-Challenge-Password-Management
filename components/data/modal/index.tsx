import ReactModal from "react-modal"

import * as S from "./styles"

interface ModalProps {
  children: React.ReactNode
  title: string
  stateModal: boolean
  setStateModal: React.Dispatch<boolean>
}

export function Modal({ children, title, stateModal, setStateModal }: ModalProps) {
  return (
    <ReactModal
      isOpen={stateModal}
      onAfterOpen={() => setStateModal(true)}
      onRequestClose={() => setStateModal(false)}
      style={S.defaultStylesModal}
      ariaHideApp={false}
    >
      <S.Modal>
        <div className="top">
          <h4>{title}</h4>

          <button type="button" onClick={() => setStateModal(false)}>
            x
          </button>
        </div>

        {children}
      </S.Modal>
    </ReactModal>
  )
}
