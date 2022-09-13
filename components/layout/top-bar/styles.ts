import styled from "styled-components";

export const TopBar = styled.div`
  background-color: var(--primary-color);
  height: 60px;
  padding: 8px 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  .logo {
    font-size: 28px;
    font-weight: 600;
    color: #fff;
    text-decoration: unset;
  }
`;
