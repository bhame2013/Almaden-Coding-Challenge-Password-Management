import styled from "styled-components";

export const Modal = styled.div`
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primary-color);
    padding: 8px 30px;

    &::before {
      content: "";
      width: 20px;
      display: block;
    }

    h4 {
      color: #fff;
      font-size: 18px;
      margin-bottom: 0;
      font-weight: 600;
    }

    button {
      width: 20px;
      background-color: transparent;
      border: 0;
      font-size: 24px;
      color: #fff;
      cursor: pointer;
      font-weight: 600;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const defaultStylesModal = {
  overlay: {
    zIndex: 99,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    cursor: "pointer",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "800px",
    width: "calc(100% - 30px)",
    cursor: "default",
    padding: "0",
    overflow: "hidden",
    border: "0",
    borderRadius: "unset"
  },
}
